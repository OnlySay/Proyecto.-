import { Component, OnInit, Input} from '@angular/core';
import { dineroing } from '../../interfaces/interfaces';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss'],
})
export class Post2Component implements OnInit {

  @Input () post: dineroing ={};

  constructor() { }

  ngOnInit() {}

}
