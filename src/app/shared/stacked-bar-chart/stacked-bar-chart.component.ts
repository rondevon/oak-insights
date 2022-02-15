import { Component, Input, OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Chart } from 'angular-highcharts';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss'],
})
export class StackedBarChartComponent implements OnInit {
  @Input('data') operatingHours: any;
  chart: any = {};
  data: any = {};
  chartValues: any[][] = [[],[],[],[]];
  operatingHoursTotals: any[] = [];
  selectedType : string = 'energy';
  typeList: string[] = [
    'energy',
    'cost',
  ];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  updateType(){
    this.chart = undefined;
    this.getOperatingHoursDetails(this.operatingHours.selectedDate.month, this.operatingHours.selectedDate.year, this.operatingHours.site_slug, this.selectedType);
  }
  
  getOperatingHoursDetails(month: String, year: String, slug: String, type: String) {
    this.apiService
      .getOperatingHoursData(month,year,slug,type)
      .subscribe((data) => {
        this.data = data.data;
        this.setOperatingHoursData();
      });
  }

    setOperatingHoursData() {
    this.data && this.data.values && this.data.values.forEach((value: any []) => {
        value.forEach((item: any, index: any) => {
          this.chartValues[index].push(item);
        });
    });
    if(this.selectedType == 'energy')
    {
    this.operatingHoursTotals = [
      { type:'Open Hours', value: (this.data.open_total).toLocaleString(), unit:'kWh', color: 'var(--color8)', percent:(this.data.open_total_percent)},
      { type:'Prep Hours', value: (this.data.preparatory_total).toLocaleString(), unit:'kWh', color: 'var(--color5)', percent:(this.data.preparatory_total_percent)},
      { type:'Non-Operating Hours', value: (this.data.non_operating_total).toLocaleString(), unit:'kWh', color:'var(--color11)', percent:(this.data.non_operating_total_percent)},
      { type:'Closed Hours', value: (this.data.closed_total).toLocaleString(), unit:'kWh', color:'var(--color6)', percent:(this.data.closed_total_percent)},
    ];
    }
    if(this.selectedType == 'cost')
    {
    this.operatingHoursTotals = [
      { type:'Open Hours', value: '£'+(this.data.open_total).toLocaleString(), color: 'var(--color8)', percent:(this.data.open_total_percent)},
      { type:'Prep Hours', value: '£'+(this.data.preparatory_total).toLocaleString(), color: 'var(--color5)', percent:(this.data.preparatory_total_percent)},
      { type:'Non-Operating Hours', value: '£'+(this.data.non_operating_total).toLocaleString(), color:'var(--color11)', percent:(this.data.non_operating_total_percent)},
      { type:'Closed Hours', value: '£'+(this.data.closed_total).toLocaleString(), color:'var(--color6)', percent:(this.data.closed_total_percent)},
    ];
    }
    this.chart = new Chart({
      title: {
        text: '',
      },
      chart:{
        marginTop: 40,
        events: {
          load: function() {
            var chart = this;
            chart.renderer.text('Click on legends to modify chart',this.chartWidth/2.45,this.chartHeight-2)
            .attr({
              zIndex: 3,
              fill: 'black'
            })
            .add();
          }
        }
      },
      exporting: { enabled: false },
      xAxis: {
        categories: this.data.x_axis,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Consumption (kWh)',
        },
        stackLabels: {
          enabled: false,
          style: {
            fontWeight: 'bold',
            color: 'gray',
          },
        },
      },
      
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y} kWh<br/>Total: {point.stackTotal} kWh',
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: false,
          },
        },
      },
      series: [
        {
          name: 'Operating',
          type: 'column',
          color: '#4164ADCC',
          data: this.data.values_open,
        },
        {
          name: 'Preparatory',
          type: 'column',
          color: '#7DC3BE',
          data: this.data.values_preparatory,
        },
        {
          name: 'Non-Operating',
          type: 'column',
          color: '#cccccc',
          data: this.data.values_non_operating,
        },
        {
          name: 'Closed',
          type: 'column',
          color: '#F8A992',
          data: this.data.values_closed,
        },
      ],
    });
  }

  ngOnInit(): void {
    this.selectedType = this.operatingHours.graphType;
  }

  ngOnChanges() {
    this.getOperatingHoursDetails(this.operatingHours.selectedDate.month, this.operatingHours.selectedDate.year, this.operatingHours.site_slug, this.operatingHours.graphType);
  }
}
