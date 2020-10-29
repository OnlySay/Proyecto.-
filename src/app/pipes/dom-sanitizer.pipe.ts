import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {

  
  constructor( private http: HttpClient,
               private domSanitizer: DomSanitizer,
               private usuarioService:UsuarioService ) { }

  

  transform(img: string): any {

    
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    
    const domImg = `background-image:url('${ img }')`;



    return this.domSanitizer.bypassSecurityTrustStyle( domImg );
  }



}
