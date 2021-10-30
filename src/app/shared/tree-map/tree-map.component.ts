import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.scss']
})
export class TreeMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('data') data: any = {};
  chart: any = {};

  ngOnChanges() {
    console.log(this.data);
    this.chart = new Chart({
      title: {
        text: '',
      },
      legend: {
        enabled: false,
      },
      exporting: { enabled: false },
      series: [
        {
          type: 'treemap',
          data: this.data
        },
      ],
    });

  }

  

}
