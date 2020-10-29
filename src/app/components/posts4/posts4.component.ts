import { Component, OnInit, Input } from '@angular/core';
import { dineroing, dineroeg } from '../../interfaces/interfaces';

@Component({
  selector: 'app-posts4',
  templateUrl: './posts4.component.html',
  styleUrls: ['./posts4.component.scss'],
})
export class Posts4Component implements OnInit {

  @Input() posts4: dineroing[] = [] ;

  constructor() { }

  ngOnInit() {

    console.log(this.posts4);
  }

}
