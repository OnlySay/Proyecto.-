import { Component, OnInit, Input } from '@angular/core';
import { calendario2 } from '../../interfaces/interfaces';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'],
})
export class TotalComponent implements OnInit {

 @Input() calendario : calendario2 = {}; 


 

  constructor() { }

  ngOnInit() {
    

    this.calcular();
    
    
  }

  calcular(){

  





  }

}
