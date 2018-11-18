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
export class BubbleChartComponent implements OnInit {
  @Input() keys: Array<string>;
  @Input() values: Array<number>;
  chart = [];

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['values']) {
  //     this.createChart();
  //   }
  // }

  createChart() {
    this.chart = new Chart('bubble-chart', {
      type: 'doughnut',
      data: this.values,
      // labels: this.keys
      //     options: {
      //       legend: {
      //         display: false
      //       },
      //       scales: {
      //         xAxes: [
      //           {
      //             display: true
      //           }
      //         ],
      //         yAxes: [
      //           {
      //             display: true
      //     }
      //   ]
      // }
      //   }
      // });
      options: {
        responsive: true,
        legend: {
          position: 'top'
        },
        title: {
          display: true,
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
