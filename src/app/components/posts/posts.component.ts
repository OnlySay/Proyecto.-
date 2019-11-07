import { Component, OnInit, Input } from '@angular/core';
import {  dineroeg, dineroing } from '../../interfaces/interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  @Input() posts: dineroeg[] = [];

  constructor() { }

  ngOnInit() {

    console.log(this.posts)
  }

}
