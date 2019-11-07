import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario:Usuario={};

  constructor(private usuarioService:UsuarioService,
              private uiServiceService:UiServiceService){}

  ngOnInit(){

    this.usuario = this.usuarioService.getUsuario();

    console.log(this.usuario);
    
  }
  

  async actualizar( fActualizar: NgForm  ){

    if (fActualizar.invalid){return;}

    const actualizado = await this.usuarioService.actualizarUsuario(this.usuario);

    

    if(actualizado){
      // toast con el mensaje de actualizado 
      this.uiServiceService.presentToast('actualizado');

    }else{
      // toast con el error
      this.uiServiceService.presentToast('no hubo actualizacion');
       
    }

  }

  //las llaves son para mandar la informacion 
  // los parentesis son para emetir algun evento

  logout(){

    
  }
}
