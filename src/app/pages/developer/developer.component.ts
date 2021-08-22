import { Component, OnInit } from '@angular/core';
import {DevelopersService} from "../../services/api/developers/developers.service";
import {UtilitiesService} from "../../services/utilities/utilities.service";
import * as moment from "moment";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  id:any = null;

  public developer:any = new FormGroup({
    nome: new FormControl(),
    datanascimento: new FormControl(),
    idade: new FormControl(),
    hobby: new FormControl(),
    sexo: new FormControl()

  })

  constructor(public developersService: DevelopersService,
              private route: ActivatedRoute,
              public router: Router,
              public utilities: UtilitiesService) {

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      if(params.get("id")) {

        let loading:any = this.utilities.loading();

        this.id = params.get('id');

        this.developersService.getDeveloper(params.get('id')).then((data:any) => {
          this.developer.get('nome').setValue(data.name);
          this.developer.get('datanascimento').setValue(data.birthdate);
          this.developer.get('idade').setValue(data.age);
          this.developer.get('hobby').setValue(data.hobby);
          this.developer.get('sexo').setValue(data.gender);
        }).finally(() => loading.close())
      }
    });

  }

  onSubmit() {

    let loading:any = this.utilities.loading();

    let data:any = this.developer.value;

    moment.locale('pt-br');

    data.datanascimento = moment(data.datanascimento).format('YYYY-MM-DD');

    let request:any = !this.id ? this.developersService.addDeveloper(data) : this.developersService.updateDeveloper(this.id, data)

    request.then((data:any) => {
      this.utilities.alert('success', !this.id ? 'Candidato Inserido com Sucesso!' : 'Candidato alterado com sucesso!');

      this.id = data.id;
    })
      .catch((err:any) => this.utilities.alert('error', 'Erro ao salvar candidato'))
      .finally(() => loading.close())

  }

  redirect() {
    this.router.navigate([`/`]);
  }
}
