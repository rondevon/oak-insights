import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  host: { class: 'background-theme' },
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: any[] = [
    { image: '/assets/icons/icon-energy-intensity.svg', title: 'Energy Usage', value: '10,067', unit: 'kWh' },
    { image: '/assets/icons/icon-closed-hours.svg', title: 'Closed-hours Consumption', value: '2,044', unit: 'kWh' },
    { image: '/assets/icons/icon-co2-emission.svg', title: 'CO2 Emission(kg)', value: '2,517', unit: 'kg' },
    { image: '/assets/icons/icon-energy-intensity.svg', title: 'Energy Intensity ', value: '2517', unit: 'kWh/m2' },
    { image: '/assets/icons/icon-offset-planting.svg', title: 'Offset by Planting', value: '467', unit: 'Oak Trees' },
    { image: '/assets/icons/icon-trend.svg', title: 'Trend vs Last Month', value: '87.5', unit: '%' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
