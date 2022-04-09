import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-activity-gauge',
  templateUrl: './activity-gauge.component.html',
  styleUrls: ['./activity-gauge.component.scss'],
})
export class ActivityGaugeComponent implements OnInit, OnChanges {
  @Input('data') data: any;
  @Input('totalSize') totalSize: any = {total: '1.5vw', text:'1vw', y:'-24'};
  pipe = new DatePipe('en-GB');
  date = this.pipe.transform(new Date(), 'dd','UTC') as string;
  seriesTarget: any;
  seriesPresent: any;
  differ: any = {};
  abvbel: any = {};
  chart: Chart = new Chart();
  ngOnChanges(changes: SimpleChanges): void {
    if (this.data.isCurrrentMonth === true)
     { 
      let currentTargetValue = (Number(this.data.target)/30*Number(this.date));
      this.differ=Math.round(currentTargetValue - Number(this.data.present));
      this.seriesTarget = ((100/30)*Number(this.date));
      this.seriesPresent = this.seriesTarget*(this.data.present/currentTargetValue);
     }
    else
    {
      this.differ = Math.round(this.data.target- this.data.present);
      this.seriesTarget = 100;
      this.seriesPresent = (Number(this.data.present)/Number(this.data.target))*100;
    
    }
    
      this.abvbel = this.differ>0? 'Below' : 'Above';
      this.chart = new Chart({
        chart: {
          height: '100%',
          margin: 0,
          spacing: [0, 0, 0, 0]
        },
        title: {
          text: '',
          style: {
            fontSize: '12px',
          },
        },
        exporting: { enabled: false },
        tooltip: {
          enabled: false,
          borderWidth: 0,
          backgroundColor: 'none',
          shadow: false,
          style: {
            fontSize: '1vw',
          },
          valueSuffix: '%',
          pointFormat:
            '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
          positioner: function (labelWidth) {
            return {
              x: (this.chart.chartWidth - labelWidth) / 2,
              y: this.chart.plotHeight / 2 - 15,
            };
          },
        },

        pane: {
          startAngle: 0,
          endAngle: 360,
          background: [
            {
              // Track for Move
              outerRadius: '100%',
              innerRadius: '88%',
              backgroundColor: '#eeeeee',
              borderWidth: 0,
            },
            {
              // Track for Exercise
              outerRadius: '75%',
              innerRadius: '63%',
              backgroundColor: '#eeeeee',
              borderWidth: 0,
            },
          ],
        },

        yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          tickPositions: [],
        },

        plotOptions: {
          solidgauge: {
            //showInLegend: true,
            dataLabels: {
              style: {
                fontFamily: 'Avenir-Roman',
                fontSize: '1vw',
              },
              borderWidth: 0,
              backgroundColor: 'none',
              y: parseInt(this.totalSize.y),
              format:
                '<div style="width:100%;text-align:center;"><span style="font-size:' + this.totalSize.total + '; color: {point.color}; font-weight: bold">' +
                Math.abs(this.differ).toLocaleString() +
                ' kWh</span><br><span style="font-size:' + this.totalSize.text + '; color: black; font-weight: bold">'+ this.abvbel + ' Target</span></div>',
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true,
          },
        },

        series: [
          {
            name: 'Actual',
            type: 'solidgauge',
            data: [
              {
                color: {
                  linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                  stops: [
                    [0, '#465DA4'],
                    [1, '#7DC3BE'],
                  ],
                },
                radius: '100%',
                innerRadius: '88%',
                y: this.seriesPresent,
              },
            ],
          },
          {
            name: 'Target',
            type: 'solidgauge',
            data: [
              {
                color: {
                  linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                  stops: [
                    [0, '#F3837A'],
                    [0.5, '#F8A992'],
                    [1, '#F3837A'],
                  ],
                },
                radius: '75%',
                innerRadius: '63%',
                y: this.seriesTarget,
              },
            ],
          },
        ],
      });
  }

  ngOnInit(): void {}
}
