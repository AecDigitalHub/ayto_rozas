import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-lineal-chart',
  templateUrl: './lineal-chart.component.html',
  styleUrls: ['./lineal-chart.component.css']
})
export class LinealChartComponent implements OnInit, OnChanges {
  @Input() keys: Array<string>;
  @Input() values: Array<number>;
  chart = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['values']) {

      this.createChart();
    }
  }

  createChart() {
    this.chart = new Chart('Bar-chart', {
      type: 'horizontalBar',
      data: {
        labels: this.keys,
        datasets: [
          {
            data: this.values,
            backgroundColor: '#F5A51E',
            borderColor: '#F5A51E',
            fill: true,
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
  }
}
