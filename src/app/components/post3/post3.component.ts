import { Component, OnInit, Input } from '@angular/core';
import { dineroeg, Usuario, dineroing } from '../../interfaces/interfaces';     


@Component({
  selector: 'app-post3',
  templateUrl: './post3.component.html',
  styleUrls: ['./post3.component.scss'],
})
export class Post3Component implements OnInit {

  @Input () post3: dineroeg ={};

  slideSoloOpts = {
    allowSlideNext: false,
    allowSlidePrev: false
  };


  
  constructor() { }

  ngOnInit(){
    
  }


}
