import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaPosts } from '../interfaces/interfaces';

const URL =environment.url;  


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts =0;

  constructor(private http: HttpClient) { }

  getPosts(){
    

    this.paginaPosts ++;

   return this.http.get<RespuestaPosts>(`${ URL }/dinero/?pagina=${ this.paginaPosts }`);

    //para que el retorne algun tipo de dato y funcione el subscribe 

  }
}
