import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  IonSlides, NavController } from '@ionic/angular';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  
@ViewChild('SlidePrincipal',{static:true})  
slides: IonSlides;

 
// JHJGVJhgjoasdjsakdjaskdjskjaskjd


loginUser={
  email:'simonkinmaster@gmail.com',
  password:'simons334911'
}

registerUser: Usuario={

  email:'simonkinmaster2',
  password:'123',
  nombre: 'simon',
  avatar:'av-1.png'

}

 
  constructor(private usuarioServie: UsuarioService,
              private navCtrl: NavController,
              private UiServiceService: UiServiceService) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

 async login(flogin:NgForm){

    if(flogin.invalid){return;}

   const valido= await this.usuarioServie.login(this.loginUser.email, this.loginUser.password);
    
   if (valido){
     //navegar al tabs
     this.navCtrl.navigateRoot('/main/tabs/tab1',{animated:true});
   }else{
     //mostrar alerta de usuario y contraseña no correctos
     this.UiServiceService.alertaInformativa('usuario contraseña equivocados')
   }
  }

  async registro( fRegistro:NgForm ){

    if(fRegistro.invalid) {return;}
    const valido = await this.usuarioServie.registro(this.registerUser);
     
   if (valido){
    //navegar al tabs
    this.navCtrl.navigateRoot('/main/tabs/tab1',{animated:true});
  }else{
    //mostrar alerta de usuario y contraseña no correctos
    this.UiServiceService.alertaInformativa('ya existe el correo ')
  }
  }


  mostrarRegistro(){

    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);

  }

  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1); 
    this.slides.lockSwipes(true);
  }


}
