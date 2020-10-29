import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { dineroeg, Post, dineroing,calendario2, cantidaddinerototal,  graficodona } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { element } from 'protractor';
import { makeStateKey } from '@angular/platform-browser';
@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})
export class Tab6Page implements OnInit {

  habilitado =true;

  posts4: dineroing[]= [];
  posts3: dineroeg[]=[];

  








  constructor(private postsService: PostsService,
              private usuarioService:UsuarioService) {
                
              }

              




  ngOnInit(){

 
    this.siguientes();

    this.siguientes2();


    this.postsService.newPost
    .subscribe(dinero =>{

      this.posts3.unshift(dinero);

      this.siguientes();
    
    });

    this.postsService.newPost2
    .subscribe(dinero =>{

      this.posts4.unshift(dinero);
    
    });
   
    

    console.log(this.posts3)
  
  }

  
 siguientes(event?,pull:boolean =false){

   

    this.postsService.getPosts(pull)
    .subscribe( resp =>{

     
      this.posts3.push(...resp.dineroeg);

      if(event) {
        event.target.complete();

        if (resp.dineroeg.length === 0){
         this.habilitado=false;
        }
      }
    });

  }

  siguientes2(event?,pull:boolean =false){

   

    this.postsService.getPostsI(pull)
    .subscribe( resp =>{

      console.log(resp )+"dineroing";
      this.posts4.push(...resp.dineroing);
      

      if(event) {
        event.target.complete();

        if (resp.dineroing.length === 0){
         this.habilitado=false;
        }
      }
      

    });

  }

  

  




  recargar( event ) {

    this.habilitado = true;
    this.posts3 = [];
    this.siguientes(event, true);
  }

  recargar2( event ) {

    this.habilitado = true;
    this.posts4 = [];
    this.siguientes2(event, true);




  }


}
