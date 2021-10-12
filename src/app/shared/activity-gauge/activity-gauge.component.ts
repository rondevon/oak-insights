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
  pipe = new DatePipe('en-GB');
  date = this.pipe.transform(new Date(), 'dd') as string;
  differ: any = {};
  abvbel: any = {};
  chart: Chart = new Chart();
  ngOnChanges(changes: SimpleChanges): void {
      this.differ=Math.round((Number(this.data.target)/30*Number(this.date)) - Number(this.data.present))
      if(this.differ>0 ?this.abvbel = 'Below' : this.abvbel = 'Above')
      this.chart = new Chart({
        chart: {
          height: '100%',
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
            dataLabels: {
              style: {
                fontFamily: 'Avenir-Roman',
                fontSize: '1vw',
              },
              borderWidth: 0,
              backgroundColor: 'none',
              y: -24,
              format:
                '<div style="width:100%;text-align:center;"><span style="font-size:1.2vw; color: {point.color}; font-weight: bold">' +
                Math.abs(this.differ) +
                ' kWh</span><br><spanstyle="font-size:1vw; color: black; font-weight: bold">'+ this.abvbel + ' Target</span></div>',
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
                y: ((Number(this.data.target)-Number(this.data.present))>0 ? (Number(this.data.target)-Number(this.data.present))/Number(this.data.target)*100 : 100),
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
                y: ((100/30)*Number(this.date)),
              },
            ],
          },
        ],
      });
  }

  ngOnInit(): void {}
}
