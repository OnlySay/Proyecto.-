import { Component, OnInit, Input } from '@angular/core';
import { calendario2, mas } from '../../interfaces/interfaces';
import { element } from 'protractor';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss'],
})
export class TotalsComponent implements OnInit {

  @Input()  calendarios: calendario2[] = [];

  total ={
    suma :  Number,
    resta : Number,
    total : Number
  }

   mas : mas []= [];



  
  constructor() { }

  ngOnInit() {
    this.calcular();
  }

  calcular(suma = 0 ){
    
    console.log(this.calendarios);

    this.calendarios.forEach(element => {

      let Copiaevent = {

        mas : element.cantidadI
        
       }

  
      this.mas.push(Copiaevent);
    
  });
}




}
