import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit, OnChanges {
  @Input() keys: Array<string>;
  @Input() values: Array<number>;
  chart2 = [];

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['values']) {
      this.createChart();
    }
  }

  createChart() {
    this.chart2 = new Chart('bubble-chart', {
      type: 'doughnut',
      data: {
      labels: this.keys,
      datasets: [
        {
          data: this.values,
          backgroundColor: ['#48A9C5', '#EAA842', '#F8485E', '#52D2BC']

        }
      ]
    },
      options: {
        responsive: true,
        legend: {
          position: 'top'
        },
        title: {
          display: false,
          text: 'Chart.js Doughnut Chart'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
  }
}
