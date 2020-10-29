import { Component, ViewChild, OnInit, Output, EventEmitter, Input, Inject, LOCALE_ID} from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { PostsService } from 'src/app/services/posts.service';
import { dineroeg, Post, Usuario, dineroing, calendario } from '../../interfaces/interfaces';
//para ver
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController, ToastController } from '@ionic/angular';
import { start } from 'repl';
import { formatDate } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page implements OnInit {

  eventSource= [ ];

  posts: dineroeg[] =[];
  
  posts2: dineroing[] =[];
  
  calendario:calendario ={};
  
  // dinero: dineroeg={};
  habilitado =true;
  dinero2: dineroeg[] = [];

  
  

  abilitado =true;

  event = {
    title    :  '',
    startTime:  '',
    endTime  :  '',
    allDay   :  false,
    nombre   :  '',
    date     :  '',
    precio   :  '',
    pagado   :  false
  }

  viewTitle = ''; 

  selectedDate = new Date();

  

  calendar = {
    mode: 'month',
    currentDate : new Date ()
  }

  

  @ViewChild(CalendarComponent,{static: true}) myCal: CalendarComponent

  constructor(private postsService:PostsService,
              private alertController: AlertController,
              @Inject(LOCALE_ID)private locale:string,
              private usuarioService:UsuarioService) {}


 ngOnInit(){
  
  this.siguientes();
  this.siguientes2();

  this.postsService.nuevoCalendario 
    .subscribe(dinero =>{
  

    this.habilitado = true;

    this.posts = [];  
    this.posts2 = [];  
    this.eventSource = [];
    
    this.siguientes();
    this.siguientes2();

    console.log('saaaas',dinero);
    });


  this.postsService.nuevoCalendario2
    .subscribe(dinero =>{
  

    this.habilitado = true;
    
    this.posts = [];  
    this.posts2 = [];  
    this.eventSource = [];
    
    this.siguientes2();
    this.siguientes();
    
    console.log('saaaas',dinero);

    });


   

  }



  siguientes(event?,pull:boolean =false){

    this.postsService.getPostsC(pull)
    .subscribe( resp =>{

      this.posts.push(...resp.dineroeg);
      
      this.posts.forEach(element=>{
        
        let Copiaevent = {
                    title    :  element.nombreD,
                    startTime:  new Date (element.fechadepagD),
                    endTime  :  new Date (element.fechadepagD),
                    allDay   :  this.event.allDay,
                    nombre   :  element.nombreD,
                    date     :  element.fechadepagD,
                    precio   :  element.precioD,
                    pagado   :  element.estadodepagD
                   }

              if(Copiaevent.allDay){
                     let start = Copiaevent.startTime;
                     let end = Copiaevent.endTime;
                
                     Copiaevent.startTime=  new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(),start.getUTCDate()));
                    Copiaevent.endTime=  new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(),end.getUTCDate()+1));
                 }

        this.eventSource.push(Copiaevent);
        
        this.myCal.loadEvents(); 

      });


      if(event) {
        event.target.complete();

        if (resp.dineroeg.length === 0){
         this.habilitado=false;
        }
      }

    });

  }

  //segunda prueba de siguientes2
  siguientes2(event?,pull:boolean =false){

    this.postsService.getPostsC(pull)
    .subscribe( resp =>{

      this.posts2.push(...resp.dineroing);
      
      this.posts2.forEach(element=>{

        console.log(this.posts2);
        
        let Copiaevent = {
                    title    :  element.textoI,
                    startTime:  new Date (element.fechadeingreso),
                    endTime  :  new Date (element.fechadeingreso),
                    allDay   :  this.event.allDay,
                    nombre   :  element.textoI,
                    date     :  element.fechadeingreso,
                    precio   :  element.cantidadI
                   }

              if(Copiaevent.allDay){
                     let start = Copiaevent.startTime;
                     let end = Copiaevent.endTime;
                
                     Copiaevent.startTime=  new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(),start.getUTCDate()));
                    Copiaevent.endTime=  new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(),end.getUTCDate()+1));
                 }

        this.eventSource.push(Copiaevent);
        
        this.myCal.loadEvents(); 

      });


      if(event) {
        event.target.complete();

        if (resp.dineroing.length === 0){
         this.habilitado=false;
        }
      }

    });

  } 




//-----------------------------------calendario ---------------------------------------

  prueba1() {}
  


  hoy(){
    this.calendar.currentDate = new Date();
  }
  
  
  // changeMode(mode){
  //   this.calendar.mode = mode;
  // }

  onCurrentDateChanged(event: Date) {
    console.log('evento de cambio: ' + event);
  }

  async onEventSelected(event){

      // this.posts.forEach(async element => {  

      //   let Copiaevent = {
      //       title    :  element.nombreD,
      //       startTime:  new Date (element.fechadepagD),
      //       endTime  :  new Date (element.fechadepagD),
      //       allDay   :  this.event.allDay,
      //       nombre   :  element.nombreD,
      //       date     :  element.fechadepagD,
      //       precio   :  element.precioD,
      //       pagado   :  element.estadodepagD
      //   }
      
      //   let start = formatDate(Copiaevent.date,'medium',this.locale);

      //   const alert = await this.alertController.create({

      //     header: Copiaevent.title,
      //     subHeader:Copiaevent.nombre,
      //     message:'Precio de ' + Copiaevent.precio+ '<br><br>Estando '+ Copiaevent.pagado+'<br><br> El '+start,
      //     buttons: ['OK']

      //   });

      //   alert.present();

      // });
  
  }
  


  onViewTitleChanged(Title){ 
    this.viewTitle = Title
  }   
  
  
}