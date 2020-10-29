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

//filtro

import { PipesModule } from '../pipes/pipes.module';
import { Posts2Component } from './posts2/posts2.component';
import { Post2Component } from './post2/post2.component';
import { Posts3Component } from './posts3/posts3.component';
import { Post3Component } from './post3/post3.component';
import { TotalsComponent } from './totals/totals.component';
import { TotalComponent } from './total/total.component';
import { Posts4Component } from './posts4/posts4.component';
import { Post4Component } from './post4/post4.component';

@NgModule({
  declarations: [PostComponent,
                 PostsComponent,
                 DineroegComponent,
                 DineroegsComponent,
                 GraficolineaComponent,
                 GraficodonaComponent,
                 AvatarSelectorComponent,
                 Posts2Component,
                 Post2Component,
                 TotalsComponent,
                 TotalComponent,
                 Posts3Component,
                 Post3Component,
                 Posts4Component,
                 Post4Component
                ],
  exports:[ PostsComponent,
            DineroegsComponent,
            AvatarSelectorComponent,
            GraficolineaComponent,
            GraficodonaComponent,
            Posts2Component,
            Posts3Component,
            Posts4Component,
            Post4Component,
            TotalsComponent]  , 
  imports: [CommonModule, IonicModule,ChartsModule,PipesModule]
})
export class ComponentsModule { }
