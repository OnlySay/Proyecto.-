import { Component, OnInit, Input } from '@angular/core';
import {  dineroeg } from '../../interfaces/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input () post: dineroeg ={};

  constructor() { }

  ngOnInit() {}

}
