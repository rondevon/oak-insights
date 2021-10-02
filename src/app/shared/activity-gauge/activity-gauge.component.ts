import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-activity-gauge',
  templateUrl: './activity-gauge.component.html',
  styleUrls: ['./activity-gauge.component.scss']
})

export class ActivityGaugeComponent implements OnInit {

  chart = new Chart({

    title: {
        text: '',
        style: {
            fontSize: '12px'
        }
    },
    exporting: { enabled: false },
    tooltip: {
        enabled:false,
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '1vw'
        },
        valueSuffix: '%',
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2 -15)
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '100%',
            innerRadius: '88%',
            backgroundColor: '#ffffff',
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '75%',
            innerRadius: '63%',
            backgroundColor: '#ffffff',
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                style: {
                    fontFamily:'Avenir-Roman',
                    fontSize: '1vw'
                },
                borderWidth: 0,
                backgroundColor: 'none',
                y: -24,
                format:'<div style="width:100%;text-align:center;"><span style="font-size:1.2vw; color: {point.color}; font-weight: bold">1,526 kwh</span><br><spanstyle="font-size:1vw; color: black; font-weight: bold">Above Target</span></div>',
            },

            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Move',
        type: 'solidgauge',
        data: [{
            color:{
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1},
      			stops: [
        				[0, '#465DA4'],
        				[1, '#7DC3BE'],
      							]
    				},
            radius: '100%',
            innerRadius: '88%',
            y: 100
        }]
    }, {
        name: 'Exercise',
        type: 'solidgauge',
        data: [{
        color:{
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1},
      			stops: [
        				[0, '#F3837A'],
       					 [0.5, '#F8A992'],
                            [1, '#F3837A']
      							]
    				},
            radius: '75%',
            innerRadius: '63%',
            y: 100
        }]
    }]
  });

  ngOnInit(): void {
  }

}
