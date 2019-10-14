import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { dineroeg, Post } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: dineroeg[] =[ ]  ;



  constructor(private postsService: PostsService) {}

  ngOnInit(){

    this.postsService.getPosts()
    .subscribe( resp =>{

      console.log(resp );
      this.posts.push(...resp.dineroeg);

    });

  }

  

  
}