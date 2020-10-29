import { Component, OnInit, Input } from '@angular/core';
import { dineroeg, dineroing, Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  @Input() posts: dineroeg[] = [];
  
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    console.log(this.posts);

  }

  


}
