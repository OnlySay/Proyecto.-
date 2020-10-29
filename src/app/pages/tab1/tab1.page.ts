import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { dineroeg, Post, dineroing, calendario, calendario2, cantidaddinerototal, mas, menos, total, graficodona } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { element } from 'protractor';
import { makeStateKey } from '@angular/platform-browser';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: dineroeg[] =[];
  habilitado =true;

  posts2: dineroing[]= [];
  
// perdoname jesu
  
  calendario2: calendario2[]= [];
  cantidadtotal: cantidaddinerototal []= [];
  cantidadtotals: number;
 
  viewtitle= 0; 


  constructor(private postsService: PostsService,
              private usuarioService:UsuarioService){}

              




  ngOnInit(){

    this.siguientes2();

    this.siguientes();
    
    this.CalculoTotal();



    this.postsService.TotalEvento  
      .subscribe(dinero =>{
  
      this.calendario2=[];

      this.viewtitle=0 ;

     this.habilitado = true;

    this.CalculoTotal();
    
    });

    
    this.postsService.newPost
    .subscribe(dinero =>{

      this.posts.unshift(dinero);

      this.siguientes2();
    
    });

   
      this.postsService.newPost2
      .subscribe(dinero =>{
  
        this.posts2.unshift(dinero);
      
      });
  
  }
  




  siguientes(event?,pull:boolean =false){

    this.postsService.getPosts(pull)
    .subscribe( resp =>{

      console.log(resp )+"dineroeg";

      this.posts.push(...resp.dineroeg);
      

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
      this.posts2.push(...resp.dineroing);
      

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
    this.posts = [];
    this.siguientes(event, true);




  }

  recargar2( event ) {

    this.habilitado = true;
    this.posts2 = [];
    this.siguientes2(event, true);




  }



   CalculoTotal(){
    this.postsService.getPostsC()
    .subscribe(resp=>{
      
    
      this.calendario2.push(...resp.dineroeg);
      this.calendario2.push(...resp.dineroing);

      let suma = 0;
      let resta = 0;
      let totales= 0;

      
      this.calendario2.map(item=>{
      
        if( item.precioD !== undefined)
        {
          let precio : number;

          precio = parseInt( item.precioD + "")


          
          resta+=precio;
          
            

        }


        
      

        if( item.cantidadI !== undefined)
        {
          let precio : number;
          precio = parseInt( item.cantidadI + "")
          // console.log("sumando " , precio);
          
          suma+=precio; 
          // console.log("la suma va en ", suma);

        }

        if(true){

          //console.log("termina la suma "+suma );
          //console.log("termina la resta "+ resta );
  
  
          
          totales = suma - resta;
  
          //console.log("este es el total "+ totales)

          
          this.viewtitle = totales;
          
        }
  

        

      });


      

      


     
    });
  }

}
