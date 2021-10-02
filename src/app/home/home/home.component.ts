import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  cards: any[] = [
    {
      image: '/assets/icons/icon-energy-usage.svg',
      title: 'Energy Usage',
      value: '10,067',
      unit: 'kWh',
      color: 'var(--color5)',
    },
    {
      image: '/assets/icons/icon-co2-emission.svg',
      title: 'CO2 Emission(kg)',
      value: '2,517',
      unit: 'kg',
      color: 'var(--color6)',
    },
    {
      image: '/assets/icons/icon-closed-hours.svg',
      title: 'Closed-hours',
      value: '2,044',
      unit: 'kWh',
      color: 'var(--color8)',
    },
    {
      image: '/assets/icons/icon-energy-intensity.svg',
      title: 'Energy Intensity ',
      value: '2517',
      unit: 'kWh/m2',
      color: 'var(--color5)',
    },
    {
      image: '/assets/icons/icon-offset-planting.svg',
      title: 'Offset by Planting',
      value: '467',
      unit: 'Oak Trees',
      color: 'var(--color5)',
    },
    {
      image: '/assets/icons/icon-trend.svg',
      title: 'Trend vs Last Month',
      value: '87.5',
      unit: '%',
      color: 'var(--color7)',
    },
  ];

  events: any[] = [
    { list: new Date(), name: 'Spring Bank Holiday' },
    { list: new Date(), name: 'Spring Bank Holiday' },
    { list: new Date(), name: 'Spring Bank Holiday' },
    { list: new Date(), name: 'Spring Bank Holiday' },
  ];

  num = 92;

  constructor() {}

  ngOnInit(): void {}
}
