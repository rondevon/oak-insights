import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  @Input('data') data: any;
  chart: any = {};
  chartType: any = {};
  savingsActualData: any = {};
  ngOnInit(): void {
    this.chartType = this.data;
    console.log (this.chartType);
    if(this.data == 'cost')
    {
      this.setDonutChartData('Total<br>2469',this.chartType);
    }
    if(this.data == 'consumption')
    {
      this.setDonutChartData('Total<br>6052',this.chartType);
    }
    if(this.data == 'emission')
    {
      this.setDonutChartData('Total<br>955',this.chartType);
    }
    
  }


  getSavingsActualData(selectedMonth: any, selectedYear: any){
    this.apiService.getSavingsData(selectedMonth,selectedYear).subscribe((data : any) => {
      this.savingsActualData = data.values;
      console.log(this.savingsActualData);
    });
  }

  setDonutChartData(total: string, seriesData: any){
    this.chart = new Chart({
      chart:{
        height:300,
      },
      title: {
        text: total,
        verticalAlign: 'middle',
        floating: true,
        style: {
          fontSize:'24px',
          fontWeight: 'bold'
      }
    },
      credits: { enabled: false },
      exporting: { enabled: false },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          colors: [
            '#364096', 
            '#4164AD', 
            '#F3837A', 
            '#70c49c', 
          ],
          size: '100%',
          innerSize: '70%',
          depth: 45,
          dataLabels: {
            enabled: false,
          },
        }
      },
      series: [{
        type: 'pie',
        data: [{
          name: 'Preparatory',
          y: 7,
        }, {
          name: 'Operational',
          y: 5,
        }, {
          name: 'Non Operational',
          y: 18,
        }, {
          name: 'Closed',
          y: 28,
        }]
      }]
    });
  }
}
