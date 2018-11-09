import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {
@Input() values1: Number;
@Input() values2: Number;
chart = [];

  constructor() { }

  ngOnInit() {
    console.log(this.values1, this.values2);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.values1);
  if (changes['values1']) {
     this.createChart();
   }
 }
 createChart() {
  this.chart = new Chart('pie-chart', {
    type: 'pie',
    data: {
      labels: [' Puestos Funcionarios ', ' Puestos Laborales '],
      datasets: [{
        label: 'Distribución Puestos Funcionarios vs. Laborales',
        data: [this.values1, this.values2],
        backgroundColor: [
          '#6492A9',
          '#98B9CB',
        ],
        borderColor: [
          '#6492A9',
          '#98B9CB',
        ],
      borderWidth: 1
  }]
},
options: {
legend: {
  display: true
},
  scales: {
      yAxes: [
        {
          display: false
        }
      ],
          ticks: {
              beginAtZero: true
          }
      }
  }
});
}
}

