import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  standalone: false,
  
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent implements AfterViewInit {
@ViewChild('antonation')   antonation!:ElementRef

elevationData :Array<any> = [
    ['Jan', 225],
    ['Feb', 125],
    ['March', 25],
    ['April', 425],
    ['May', 825],
    ['June', 925],
    ['July', 325],
    ['August', 105],
    ['September', 165],
    ['October', 195],
    ['November', 595],
    ['December', 695],
];
ngAfterViewInit() {
  // Ensure the element is available before rendering the chart
  this.createChart();
}

createChart(){

Highcharts.chart(this.antonation?.nativeElement, {
  chart: {
    type: 'area'
  },
  title: {
    text: '',
    
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    title: {
      text: 'Amount in Rs'
    }
  },
  series: [
    {
      name: 'Branch 1',
      type: 'area',
      data: [225, 125, 300, 321, 425, 678]
    },
    // {
    //   name: 'Branch 2',
    //   type: 'area',
    //   data: [229, 230, 300, 400, 430, 800]
    // }
  ]
});
}

}
