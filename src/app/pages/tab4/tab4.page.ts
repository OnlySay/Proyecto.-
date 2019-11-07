import { Component, OnInit } from '@angular/core';
import { Usuario, dineroing, dineroeg } from '../../interfaces/interfaces';
import { UiServiceService } from '../../services/ui-service.service';
import { DineroService } from '../../services/dinero.service';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  dineroings: dineroing[] = [];
  dineroegs: dineroeg []= [];

  constructor(private dineroService:DineroService){}

  ngOnInit(){

    this.dineroService.getDinero()
    .subscribe(resp=>{  
      this.dineroings.push( ...resp.dineroing)
    });
    
  }
  

  


  logout(){

    
  }
}
