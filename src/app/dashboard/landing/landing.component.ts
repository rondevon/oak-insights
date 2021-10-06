import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  oakScore = 92;

  cards: any[] = [
    {
      image: '/assets/icons/Icon-Energy-Usage.svg',
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
