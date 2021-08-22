import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  constructor(private http: HttpClient) {}

  getDevelopers(page:any = 1, params:any = {}) {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.apiUrl}/developers?page=${page}`, {params: params})
        .subscribe((data:any) => resolve(data), err => reject(err));
    })
  }

  getDeveloper(id:any) {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.apiUrl}/developers/${id}`)
        .subscribe((data:any) => resolve(data), err => reject(err));
    })
  }

  addDeveloper(data:any = {}) {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiUrl}/developers`, data)
        .subscribe((data:any) => resolve(data), err => reject(err));
    })
  }

  updateDeveloper(id:any, data:any = {}) {
    return new Promise((resolve, reject) => {
      this.http.put(`${environment.apiUrl}/developers/${id}`, data)
        .subscribe((data:any) => resolve(data), err => reject(err));
    })
  }

  deleteeDeveloper(id:any) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${environment.apiUrl}/developers/${id}`)
        .subscribe((data:any) => resolve(data), err => reject(err));
    })
  }
}
