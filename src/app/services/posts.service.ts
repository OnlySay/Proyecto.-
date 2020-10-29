import { Injectable, EventEmitter } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaPosts, dineroeg, dineroing, calendario2 ,graficodona} from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';
import { promise } from 'protractor';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

const URL =environment.url;  


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts =0;



  newPost = new EventEmitter<dineroeg>();

  nuevoCalendario = new EventEmitter<dineroeg>();

  nuevoCalendario2 = new EventEmitter<dineroing>();

  newPost2 = new EventEmitter<dineroing>();

  TotalEvento = new EventEmitter<calendario2>();

  EventoGrafico = new EventEmitter<graficodona>();

  

  constructor(private http: HttpClient,
              private usuarioService:UsuarioService,
              private fileTransfer: FileTransfer) { }

  getPosts(pull:boolean=false){
    
    if (pull){
      this.paginaPosts =0;
    }
    this.paginaPosts ++;

    const headers = new HttpHeaders({

      'x-token': this.usuarioService.token
    });


   return this.http.get<RespuestaPosts>(`${ URL }/dinero/?pagina=${ this.paginaPosts }`,{headers});


    //para que el retorne algun tipo de dato y funcione el subscribe 

  }
  getPostsI(pull:boolean=false){

    if (pull){
      this.paginaPosts =0;
    }
    this.paginaPosts ++;


    const headers = new HttpHeaders({

        'x-token': this.usuarioService.token

    });

   return this.http.get<RespuestaPosts>(`${ URL }/dineroI/?pagina=${ this.paginaPosts }`,{headers});

    //para que el retorne algun tipo de dato y funcione el subscribe 

  }
  // este es la ruta del calendario 
  
  getPostsC(pull:boolean=false){
    
  
    const headers = new HttpHeaders({

      'x-token': this.usuarioService.token
    });

    return this.http.get<RespuestaPosts>(`${ URL }/Calendario/`,{headers});

    //para que el retorne algun tipo de dato y funcione el subscribe 

  }


  getPostDinerog(pull:boolean=false){


    const headers = new HttpHeaders({

      'x-token': this.usuarioService.token
    });

    return this.http.get<RespuestaPosts>(`${ URL }/Calendario/`,{headers});

    //para que el retorne algun tipo de dato y funcione el subscribe 


  }

  crearDineroeg(dineroeg){

    const headers = new HttpHeaders({

      'x-token': this.usuarioService.token
    });



    return new Promise ( resolve =>{

      this.http.post(`${ URL }/dinero/ingresoDineroP`,dineroeg,{headers})
      .subscribe(resp =>{
        
        console.log(resp);
  
        this.newPost.emit(resp['dinero']);

        this.nuevoCalendario.emit(resp['dinero']);

        this.TotalEvento.emit(resp['dinero']);

        this.EventoGrafico.emit(resp['dinero']);

        resolve (true);
      });
      


    })

    
  }

  
  crearDineroIng(dineroing){

    const headers = new HttpHeaders({

      'x-token': this.usuarioService.token
    });

    return new Promise ( resolve =>{
    this.http.post(`${ URL }/dineroI/ingresoDinero`,dineroing,{headers})
    .subscribe(resp =>{

      this.newPost2.emit(resp['dinero']);

      
      this.nuevoCalendario2.emit(resp['dinero']);

      this.TotalEvento.emit(resp['dinero']);

      this.EventoGrafico.emit(resp['dinero']);


      console.log(resp);
      resolve (true);
     });

    })
  }  



  subirImagen( img: string ) {

    const options: FileUploadOptions = {
      fileKey: 'image',
      headers: {
        'x-token': this.usuarioService.token
      }
    };

    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    fileTransfer.upload( img, `${ URL }/dinero/upload`, options ,)
      .then( data => {
        console.log(data);
      }).catch( err => {
        console.log('error en carga', err);
      });

  }

  subirImagen2( img: string ) {

    const options: FileUploadOptions = {
      fileKey: 'image',
      headers: {
        'x-token': this.usuarioService.token
      }
    };

    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    fileTransfer.upload( img, `${ URL }/dineroI/upload`, options ,)
      .then( data => {
        console.log(data);
      }).catch( err => {
        console.log('error en carga', err);
      });

  }
}
