import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Respuestadinero } from '../interfaces/interfaces';

const URL =environment.url;  


@Injectable({
  providedIn: 'root'
})
export class DineroService {


  constructor(private http: HttpClient ) { }

  getDinero(){

    
   return this.http.get<Respuestadinero>(`${ URL }/dineroI/`);

  }

  getDineroE(){
    
    return this.http.get<Respuestadinero>(`${ URL}/dinero/ `);

  }


}