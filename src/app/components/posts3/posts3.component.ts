import { Component, OnInit, Input } from '@angular/core';
import { dineroing, dineroeg } from '../../interfaces/interfaces';

@Component({
  selector: 'app-posts3',
  templateUrl: './posts3.component.html',
  styleUrls: ['./posts3.component.scss'],
})
export class Posts3Component implements OnInit {

  @Input() posts3: dineroeg[] = [] ;

  constructor() { }

  ngOnInit() {

    console.log(this.posts3);
  }

}
