import { Component, OnInit, Input } from '@angular/core';
import { dineroeg, Usuario, dineroing } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input () post: dineroeg ={};

  slideSoloOpts={
    allowSlideNext: false,
    allowSlidePrev: false
  };


  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(){
    
  }


}
