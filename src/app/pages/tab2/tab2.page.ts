import { Component } from '@angular/core';
import { dineroeg } from 'src/app/interfaces/interfaces';
import { PostsComponent } from '../../components/posts/posts.component';
import { PostsService } from 'src/app/services/posts.service';
import { dineroing } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
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
