import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { dineroeg, Post, dineroing } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: dineroeg[] =[];
  habilitado =true;

  Dineroeg: dineroeg []=[];


  constructor(private postsService: PostsService) {}

  ngOnInit(){

    console.log('on inits');
    this.siguientes();

    

  }

  recargar( event ) {


    this.habilitado = true;
    this.posts = [];
    this.siguientes(event, true);


  }

  siguientes(event?,pull:boolean =false){

   

    this.postsService.getPosts(pull)
    .subscribe( resp =>{

      console.log(resp );
      this.posts.push(...resp.dineroeg);

      if(event) {
        event.target.complete();

        if (resp.dineroeg.length === 0){
         this.habilitado=false;
        }
      }

    });
    



  }



}
