import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';
import { ImagenPipe } from './imagen.pipe';
import { algoasi } from './pipefiltrojeje';



@NgModule({
  declarations: [FiltroPipe, DomSanitizerPipe, ImageSanitizerPipe, ImagenPipe,algoasi],
  exports: [FiltroPipe,DomSanitizerPipe,ImageSanitizerPipe,ImagenPipe,algoasi],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
