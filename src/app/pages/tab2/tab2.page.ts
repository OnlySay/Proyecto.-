import { Component, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';
import { UiServiceService } from '../../services/ui-service.service';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
import { LocalNotifications, ELocalNotificationTriggerUnit  } from '@ionic-native/local-notifications/ngx';




declare var window:any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tempImages: string[] = [];

  cargandoGeo = false;

  
  dineroeg= {
    nombreD:'',
    precioD:'',
    tipoD:'',
    fechadepagD:'',
    estadodepagD:Boolean()
  };
  
  dineroing= {
    cantidadI:'',
    textoI:''
  };  


  
  constructor(private postsService:PostsService,
              private route: Router,
              private uiServiceService:UiServiceService,
              private camera : Camera,
              private localNotifications: LocalNotifications) {
  }
  
 async crearPost( ){
    
    console.log(this.dineroeg);
    
  

   if(this.dineroeg.estadodepagD == true){
     
    const creado = await  this.postsService.crearDineroeg(this.dineroeg);

  
    this.dineroeg = {
 
     nombreD:'',
     precioD:'',
     tipoD:'',
     fechadepagD:'',
     estadodepagD: true
 
     
    };
 
    
    
    this.tempImages = [];

    

    if(creado){

  
      // toast con el mensaje de actualizado 
     await this.uiServiceService.presentToast('¡Deuda Guardada!');
     
      
       this.route.navigateByUrl('/main/tabs/tab1');
  
  
  
    }else{
      // toast con el error
      this.uiServiceService.presentToast('error al guardar los datos, intente nuevamente');
       
    }


   }else{


    console.log(this.dineroeg)+'aqui hay algo que no seasjdksaja';

    this.localNotifications.schedule({
      id:1 ,
      title: 'Hey recuerde que tiene que pagar su Deuda de!  $'+this.dineroeg.precioD,
      trigger:{at: new Date(new Date(this.dineroeg.fechadepagD))
      
      }
    });


    
    this.dineroeg = {
 
      nombreD:'',
      precioD:'',
      tipoD:'',
      fechadepagD:'',
      estadodepagD: true
  
      
     };
  
     
     
     this.tempImages = [];
 
   
      // toast con el mensaje de actualizado 
    
      this.uiServiceService.presentToast('¡Le Recordaremos cuando tenga que pagar!');
    
    
     
   
    
      
     
       this.route.navigateByUrl('/main/tabs/tab1');
  
    

   }


   
  
  }


 async crearPostIng(){
    
    console.log(this.dineroing);
    
    const creado = await   this.postsService.crearDineroIng(this.dineroing);
    

    this.dineroing= {
      cantidadI:'',
      textoI:''
    };  

    
    this.tempImages = [];


    if(creado){
      // toast con el mensaje de actualizado 
     await this.uiServiceService.presentToast(' ingreso guardado de manera correcta ');
      
       this.route.navigateByUrl('/main/tabs/tab1');
  
    }else{
      // toast con el error
      this.uiServiceService.presentToast('error al guardar los datos, intente nuevamente');
       
    }
   

  }

  
  camara() {

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.procesarImagen( options );

  }

  libreria() {

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.procesarImagen( options );

  }


  procesarImagen(options: CameraOptions){

    this.camera.getPicture(options).then( ( imageData ) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

      const img = window.Ionic.WebView.convertFileSrc( imageData );

      console.log(img);
      
      this.postsService.subirImagen(imageData);
      
      this.tempImages.push( img );
      

     }, (err) => {
      // Handle error
     });
 

  }

  camara2() {

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.procesarImagen2( options );

  }

  libreria2() {

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.procesarImagen2( options );

  }



  procesarImagen2(options: CameraOptions){

    this.camera.getPicture(options).then( ( imageData ) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

      const img = window.Ionic.WebView.convertFileSrc( imageData );

      console.log(img);
      
      this.postsService.subirImagen2(imageData);
      
      this.tempImages.push( img );
      

     }, (err) => {
      // Handle error
     });
 

  }

 

}
