import { Component, OnInit } from '@angular/core';
import { Usuario, dineroing, dineroeg, graficodona, calendario2, total } from '../../interfaces/interfaces';
import { UiServiceService } from '../../services/ui-service.service';
import { DineroService } from '../../services/dinero.service';
import { UsuarioService } from '../../services/usuario.service';
import { PostsService } from '../../services/posts.service';
import { FiltroPipe } from '../../pipes/filtro.pipe';



@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  dineroings: dineroing[] = [];
  dineroegs: dineroeg []= [];
  posts: dineroeg[] =[];
  habilitado =true;
  posts2: dineroing[]= [];
  Dineroeg: dineroeg [];
  dineroing: dineroing []=[];
  dineromas: dineroing []= [];  
  dineromenos: dineroeg []=[];
  cantidadtotals: number;
  wea : number;
  viewtitle= '';
  vertitulo=0;
  viewtext= "";
  viewtext1= "";
  viewtext2= "";
  viewtext3= "";
  viewtext4= "";
  viewtext5= "";
  viewtext6= "";
  graficodona: graficodona [] = [];
  
  viewtitle2= 0; 
  calendario2: calendario2[]= [];

  constructor(private dineroService:DineroService,
              private postsService: PostsService){}

  ngOnInit(){

    this.calculo();
  
    this.postsService.EventoGrafico 
    .subscribe(dinero =>{
  
  
    this.graficodona = [];

    
    this.viewtitle= "";
    this.vertitulo = 0;
    this.viewtext= "";
    this.viewtext1= "";
    this.viewtext2= "";
    this.viewtext3= "";
    this.viewtext4= "";
    this.viewtext5= "";
    this.viewtext6= "";
    this.calculo();

    console.log("bueno esto es una berificacioasjdas")
    });
  
  }


  

  calculo(){
    this.postsService.getPostsC()
      .subscribe(resp=>{
        
        this.graficodona.push(...resp.dineroeg);
        this.graficodona.push(...resp.dineroing);
  
        //console.log("start operations ");
  
        let precio = 0;
        let cantidad  = 0;
        let totales= 0;
        let totales2 = 0;
        let uno = 0;
        this.graficodona.map(item =>{
  
  
          if(item.cantidadI !== undefined){
  
            let cantidad3 : number;
  
            cantidad3 = parseInt(item.cantidadI +"")
  
            //console.log ("esta es cantidad " + cantidad3);

  
           cantidad +=cantidad3;

           
          }

        });
  
        this.graficodona.map(item =>{
  
          if(item.precioD !== undefined){
  
            let precio3 : number;
  
            precio3 = parseInt(item.precioD +"")
  
            // console.log("esto es precio"+ precio3);
  
            precio += precio3;
  
          }
          

  
        });

        if(true){
  
          console.log("precio "+precio)
  
          console.log("cantidad "+  cantidad)

          totales = cantidad - precio;

          uno =  ((100*precio) /cantidad);
          


          console.log(uno)+"algo";

          


          this.viewtitle2 = totales ;
          ;
          
          if(totales == 0  ){

            this.viewtitle = "Para que podamos empezar a trabajar haga algun ingreso :)"
          }else if(uno >= 80){
            this.viewtitle = "bueno estamos mal..... ";
            this.vertitulo = uno;
            this.viewtext = "Es lo que consume usted de su salario, es demaciado y casi no tiene ahorros... pero hey nada es imposible"
            +" siempre se puede solucionar y con compromiso te diremos como!";
               
           this.viewtext1=    "1r Registraremos sus gastos automaticamente no se preocupe!"
           this.viewtext2= "2r Tendra que hacer un presupuesto mensual "
           this.viewtext3= "3r Evitar gastar inecesariamente  "
           this.viewtext4= "4r metas de ahorro a corto y largo plazo"
           this.viewtext5= "5r Decida las prioridades al momento de pagar "
           this.viewtext6= "para mas información siga nuestra pagina web en...";
        
            
         
          
          }else if(uno >= 70){
            this.viewtitle = "Usted consume de su salario un  ";
            this.vertitulo = uno;
            this.viewtext = " Puede ser un poco peligroso aveces gastar tanto, tenga cuidado y siempre tenga ahorros"+
              "nadie sabe cuando se pueden necesitar algunos ";
           
          
          }else if(uno >= 50){
            this.viewtitle = "Usted consume de su salario un  ";
            this.vertitulo = uno;
            this.viewtext = "un poco de su salario lo esta guardando de forma correcta!";
          
         
          
          }else if(uno >= 30){
            this.viewtitle = "Usted consume de su salario un  ";
            this.vertitulo = uno;
            this.viewtext = " esperamos que lo que esta ahorrando lo pueda obtener de forma asegurada!";
           
          }else if(uno >= 20){
            this.viewtitle = "Usted consume de su salario un  ";
            this.vertitulo = uno;
            this.viewtext = "es increible! usted ahorra demaciado!";
         
          
          }else if(uno >= 1){

            this.viewtitle = "Usted consume de su salario un  ";
            this.vertitulo = uno;
            this.viewtext = "es increible!  la manera que usted guarda su dinero siga asi!";
            this.viewtext2= " esperamos que siga guardando su dinero de forma espectacular ";
         
          
          }else if(uno >= -0){

            this.viewtitle = "Hey! cuando hagas un egreso aqui te mostraremos que tal te va :) ";
          
        
         
          
          }


         // this.pieChartData = [precio,cantidad]
  
         // console.log(this.pieChartData)
        }        
        
  
      
       });
  }
  

  
  


}
