import { Component, OnInit, Input } from '@angular/core';
import { dineroeg } from '../../interfaces/interfaces';

@Component({
  selector: 'app-dineroeg',
  templateUrl: './dineroeg.component.html',
  styleUrls: ['./dineroeg.component.scss'],
})
export class DineroegComponent implements OnInit {

  @Input() dineroeg:dineroeg ={};
  
  constructor() { }

  ngOnInit() {}

}
