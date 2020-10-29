import { Component, OnInit, Input } from '@angular/core';
import { dineroing } from '../../interfaces/interfaces';

@Component({
  selector: 'app-posts2',
  templateUrl: './posts2.component.html',
  styleUrls: ['./posts2.component.scss'],
})
export class Posts2Component implements OnInit {

  @Input() posts2: dineroing[] = [];

  constructor() { }

  ngOnInit() {

    console.log(this.posts2);
  }

}
