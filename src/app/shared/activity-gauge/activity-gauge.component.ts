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
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        valueSuffix: '%',
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
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
                enabled: false
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
        				[0, '#f79685'],
        				[1, '#f45c42']
      							]
    				},
            radius: '100%',
            innerRadius: '88%',
            y: 80
        }]
    }, {
        name: 'Exercise',
        type: 'solidgauge',
        data: [{
        color:{
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1},
      			stops: [
        				[0, '#f699ff'],
       					 [1, '#d71ee8']
      							]
    				},
            radius: '75%',
            innerRadius: '63%',
            y: 65
        }]
    }]
  });

  ngOnInit(): void {
  }

}
