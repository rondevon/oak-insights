import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-multi-donut-chat',
  templateUrl: './multi-donut-chat.component.html',
  styleUrls: ['./multi-donut-chat.component.scss']
})
export class MultiDonutChatComponent implements OnInit {
  @Input('data') data: any;
  @Input('total') total: any = '';
  chart: any = {};

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    if(this.data && this.data.length > 0){
      this.setDonutChartData((this.total).toLocaleString(undefined,
        {'minimumFractionDigits':2,'maximumFractionDigits':2}), this.data);
    }
  }

  setDonutChartData(total: string = '', seriesData: any) {
    this.chart = new Chart({
      chart: {
        height: 300,
      },
      title: {
        text: 'Total<br>' + total,
        verticalAlign: 'middle',
        floating: true,
        style: {
          fontSize: '24px',
          fontWeight: 'bold',
        },
      },
      credits: { enabled: false },
      exporting: { enabled: false },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>',
      },
      plotOptions: {
        pie: {
          colors: ['#364096', '#4164AD', '#F3837A', '#70c49c'],
          size: '100%',
          innerSize: '70%',
          depth: 45,
          dataLabels: {
            enabled: false,
          },
        },
      },
      series: [
        {
          type: 'pie',
          data: seriesData,
        },
      ],
    });
  }

}
