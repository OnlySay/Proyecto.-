import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { IonicModule } from '@ionic/angular';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { DineroegComponent } from './dineroeg/dineroeg.component';
import { DineroegsComponent } from './dineroegs/dineroegs.component';

//graficos
import { ChartsModule } from 'ng2-charts';
import { GraficolineaComponent } from './graficolinea/graficolinea.component';
import { GraficodonaComponent } from './graficodona/graficodona.component';

@NgModule({
  declarations: [PostComponent,
                 PostsComponent,
                 DineroegComponent,
                 DineroegsComponent,
                 GraficolineaComponent,
                 GraficodonaComponent,
                 AvatarSelectorComponent,
                ],
  exports:[ PostsComponent,
            DineroegsComponent,
            AvatarSelectorComponent,
            GraficolineaComponent,
            GraficodonaComponent]  , 
  imports: [CommonModule, IonicModule,ChartsModule,]
})
export class ComponentsModule { }
