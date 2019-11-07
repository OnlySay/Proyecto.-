import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaPosts, dineroeg, Post } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';

const URL =environment.url;  


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts =0;

  constructor(private http: HttpClient,
              private usuarioService:UsuarioService) { }

  getPosts(pull:boolean=false){
    
    if (pull){
      this.paginaPosts =0;
    }
    this.paginaPosts ++;

   return this.http.get<RespuestaPosts>(`${ URL }/dinero/?pagina=${ this.paginaPosts }`);

    //para que el retorne algun tipo de dato y funcione el subscribe 

  }

  //aqui posiblemente quede la embarra. 

  crearDineroeg(post){
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    this.http.post(`${ URL }/dinero/ingresoDineroP`,post,{headers})
    .subscribe(resp =>{
      console.log(resp);
    });

  }

  
  crearDineroIng(post){
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    this.http.post(`${ URL }/dineroI/ingresoDinero`,post,{headers})
    .subscribe(resp =>{
      console.log(resp);
    });

  }
}
