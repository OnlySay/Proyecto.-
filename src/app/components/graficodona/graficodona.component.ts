import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, Chart, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DineroService } from '../../services/dinero.service';
import { PostsService } from '../../services/posts.service';
import { Usuario, dineroing, dineroeg, graficodona } from '../../interfaces/interfaces';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styleUrls: ['./graficodona.component.scss'],
})
export class GraficodonaComponent implements OnInit {

  title = "app";

  dineroings: dineroing[] = [];
  dineroegs: dineroeg []= [];
  posts: dineroeg[] =[];
  habilitado =true;

  posts2: dineroing[]= [];

  dineroings2 ={}

  graficodona: graficodona [] = [];

constructor(private dineroService:DineroService,
            private postsService: PostsService) { }

ngOnInit() {


  

  
//  this.dineroings2 = this.dineroService.getDinero();
//  console.log(this.dineroings2);

  this.calculoDona(); 
  
  this.postsService.EventoGrafico 
  .subscribe(dinero =>{

  this.pieChartData = [];

  this.graficodona = [];


  this.calculoDona();
  console.log("bueno esto es una berificacioasjdas")
  });

  
}



public pieChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'top',
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return label;
      },
    },
  }
};



public pieChartLabels: Label[] = [['Gastos'], ['Ingresos'] ];
public pieChartData: number[]= [];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;



calculoDona(){
  this.postsService.getPostsC()
    .subscribe(resp=>{
      
    
      this.graficodona.push(...resp.dineroeg);
      this.graficodona.push(...resp.dineroing);

      console.log("start operations ");

      let precio = 0;
      let cantidad  = 0;


    

      this.graficodona.map(item =>{


        if(item.cantidadI !== undefined){

          let cantidad3 : number;

          cantidad3 = parseInt(item.cantidadI +"")

          console.log ("esta es cantidad " + cantidad3);


         cantidad +=cantidad3;
        }

      });

      this.graficodona.map(item =>{

        if(item.precioD !== undefined){

          let precio3 : number;

          precio3 = parseInt(item.precioD +"")

          console.log("esto es precio"+ precio3);

          precio += precio3;

        }

      });


      if(true){

        console.log("precio "+precio)

        console.log("cantidad "+  cantidad)


   
        this.pieChartData = [precio,cantidad]

        console.log(this.pieChartData)
      }
      
     });
     
    
}



public pieChartColors = [
  {
    backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
  },
];
// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

changeLabels() {
  const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
    'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
    'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
    'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
    'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
  const randomWord = () => words[Math.trunc(Math.random() * words.length)];
  this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
}

chartReady = true;


public Chartcondatos (){

 

  this.dineroService.getDinero()
  .subscribe(resp=>{
    console.log(resp.dineroing[2].cantidadI[1]);
    this.dineroings.push( ...resp.dineroing);
  }
);
    
  
}


changeLegendPosition() {
  this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
}


}
