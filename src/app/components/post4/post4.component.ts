import { Component, OnInit, Input } from '@angular/core';
import { dineroeg, Usuario, dineroing } from '../../interfaces/interfaces';     


@Component({
  selector: 'app-post4',
  templateUrl: './post4.component.html',
  styleUrls: ['./post4.component.scss'],
})
export class Post4Component implements OnInit {

  @Input () post4: dineroing ={};

  slideSoloOpts = {
    allowSlideNext: false,
    allowSlidePrev: false
  };


  
  constructor() { }

  ngOnInit(){
    
  }


}
