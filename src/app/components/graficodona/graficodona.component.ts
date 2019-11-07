import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, Chart, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DineroService } from '../../services/dinero.service';
import { Usuario, dineroing, dineroeg } from '../../interfaces/interfaces';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styleUrls: ['./graficodona.component.scss'],
})
export class GraficodonaComponent implements OnInit {

  title = "app";

  dineroings: dineroing[] = [];
  dineroegs: dineroeg []= [];

  dineroings2 ={}

constructor(private dineroService:DineroService) { }

ngOnInit() {

  this.dineroService.getDinero()
  .subscribe(resp=>{
    console.log(resp);
    this.dineroings.push( ...resp.dineroing)
  });

  

  
  this.dineroings2 = this.dineroService.getDinero();
  console.log(this.dineroings2);
  
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
public pieChartLabels: Label[] = [['A'], ['B'], 'C'];
public pieChartData: number[]= [300,300,300];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;

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
