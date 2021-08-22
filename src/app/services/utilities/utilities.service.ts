import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  loading(message:any = 'Aguarde...') {
    return Swal.fire({title: message, didOpen: () => Swal.showLoading() });
  }

  alert(icon:string = 'success', title:string = '', message:string = '', question:boolean = false) {
    return new Promise((resolve, reject) => {
      let options:any = {
        title: title,
        icon: icon,
        html: message,
        confirmButtonText: 'Entendi',
        allowOutsideClick: false
      }

      if(question) {
        options.showCancelButton = true;
        options.confirmButtonText = 'Sim';
        options.cancelButtonText = 'Não';
        options.reverseButtons = true;
      }

      Swal.fire(options).then((data:any) => {
        if(data.isConfirmed) resolve(data);
        else
          reject(data);
      })
    })

  }

  generatePagination(page:number, last_page:number) {
    return new Promise((resolve, reject) => {
      let flag = true;
      let seq = page;
      let sequence:any = [];

      if(page > 1 && page != last_page) {
        sequence.push(page - 1);
        sequence.push(page);
      }
      else if(page > 2 && page == last_page) {
        sequence.push(page - 2);
        sequence.push(page - 1);
        sequence.push(page);
      }
      else sequence.push(page);

      if(page != last_page) {
        while(flag) {
          if(sequence.length < 3) {
            if(seq > last_page) flag = false;
            else {
              seq++;
              sequence.push(seq);
            }
          }
          else flag = false;
        }
      }

      setTimeout(() => resolve(sequence), 500);
    })
  }
}
