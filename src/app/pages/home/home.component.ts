import { Component, OnInit } from '@angular/core';
import {DevelopersService} from "../../services/api/developers/developers.service";
import {UtilitiesService} from "../../services/utilities/utilities.service";
import * as moment from "moment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public q:string = '';
  public developers:any = [];
  public search_result:string = 'name'

  public search_list:any = [
    {id: 'name', description: 'Nome'},
    {id: 'birthdate', description: 'Data de Nascimento'},
    {id: 'age', description: 'Idade'},
    {id: 'gender', description: 'Sexo'}
  ]

  pagination:any = {
    page: 1,
    last: 2,
    sequence: []
  }

  displayedColumns: string[] = ['id'];

  constructor(public developersService: DevelopersService,
              public router: Router,
              public utilities: UtilitiesService) {

  }

  ngOnInit(): void {

    this.getDevelopers();

  }

  onSubmit(page:any = 1) {

    if(this.q) {
      let search:any = {
        search: this.search_result,
        q: this.q
      }

      if(this.search_result == 'birthdate') {
        moment.locale('pt-br')

        search.q = moment(this.q, 'DD/MM/YYYY').format('YYYY-MM-DD');
      }

      this.getDevelopers(page, search)
    }
    else
      this.getDevelopers(page)
  }

  getDevelopers(page:any = 1, search:any = {}) {

    this.developersService.getDevelopers(page, search).then((data:any) => {

      this.developers = data.data;

      this.pagination.last = data.last_page;

      this.pagination.page = data.current_page;

      this.utilities.generatePagination(this.pagination.page, this.pagination.last).then((data:any) => {

        this.pagination.sequence = data;

      });

    })

  }

  maskConfig(data:any) {
    if(data == 'age') return '000';
    return '00/00/0000';
  }

  redirect(id:any = null) {

    let routeRedirect:string = !id ? '/desenvolvedor' : `/desenvolvedor/${id}`

    this.router.navigate([routeRedirect]);
  }

  delete(id:any) {
    this.utilities.alert('question', 'Deseja remover este desenvolvedor?', '', true).then((data:any) => {

      let loading:any = this.utilities.loading();

      this.developersService.deleteeDeveloper(id).then((data:any) => {

        this.utilities.alert('success', 'Desenvolvedor removido com sucesso!');

        this.onSubmit(this.pagination.page);

      }).catch((err:any) => this.utilities.alert('error', 'Houve um erro ao remover o desenvolvedor'))
        .finally(() => loading.close())

    }).catch((err:any) => {})
  }

}
