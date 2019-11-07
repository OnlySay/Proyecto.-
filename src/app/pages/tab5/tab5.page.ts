import { Component } from '@angular/core';

import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  
  dineroeg= {
    nombreD:'',
    precioD:''

  }
  
  dineroing= {
    cantidadI:''

  }


  
  constructor(private postsService:PostsService) {
  }
  
  crearPost(){
    
    console.log(this.dineroeg);
    this.postsService.crearDineroeg(this.dineroeg);
    
  }

  crearPostIng(){
    
    console.log(this.dineroing);
    this.postsService.crearDineroIng  (this.dineroing);
    
  }

 

}
