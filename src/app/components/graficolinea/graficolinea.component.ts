import { Component, ViewChild , OnInit} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { dineroing, dineroeg, calendario2 } from '../../interfaces/interfaces';
import { PostsService } from '../../services/posts.service';




@Component({
  selector: 'app-graficolinea',
  templateUrl: './graficolinea.component.html',
  styleUrls: ['./graficolinea.component.scss'],
})
export class GraficolineaComponent implements OnInit {

  posts: dineroeg[] =[];
  porcentajes: calendario2[]= [];

  public lineChartData: ChartDataSets[]   = [

    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Gastos' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Ganancia' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Efectividad', yAxisID: 'y-axis-1' }

  ];



  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';


  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private postsService: PostsService) { }

  ngOnInit() {

    this.postsService.newPost
    .subscribe(dinero =>{

      this.posts.unshift(dinero);

    
    });
    
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor() {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel() {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
    // this.chart.update();
  }

  CalculoTotal(){
    this.postsService.getPostsC()
    .subscribe(resp=>{
      
    
      this.porcentajes.push(...resp.dineroeg);
      this.porcentajes.push(...resp.dineroing);

      let suma = 0;
      let resta = 0;
      let totales= 0;

      console.log("start operations ");
      
      this.porcentajes.map(item=>{
      
        if( item.precioD !== undefined)
        {
          let precio : number;

          precio = parseInt( item.precioD + "")


          console.log("resta " , precio);
          
          resta+=precio; 

         
      

        }

        console.log('precio total',resta);
        
      

        if( item.cantidadI !== undefined)
        {
          let precio : number;
          precio = parseInt( item.cantidadI + "")
          // console.log("sumando " , precio);
          
          suma+=precio; 
          // console.log("la suma va en ", suma);

        }

        if(true){

        
          
        }
  

        

      });


      

      


     
    });
  }


}




