import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
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
    },
    {
      image: '/assets/icons/icon-energy-intensity.svg',
      title: 'Energy Intensity ',
      value: '2,517',
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

  heatmapranges: any[] = [
    {range:'100-200',color:'var(--heatmap-color1)'},
    {range:'200-400',color:'var(--heatmap-color2)'},
    {range:'400-600',color:'var(--heatmap-color3)'},
    {range:'600-800',color:'var(--heatmap-color4)'},
    {range:'800-1000',color:'var(--heatmap-color5)'},
  ];

  events: any[] = [
    { list: new Date(), name: 'Spring Bank Holiday' },
    { list: new Date(), name: 'Spring Bank Holiday 2' },
    { list: new Date(), name: 'Spring Bank Holiday 3' },
    { list: new Date(), name: 'Spring Bank Holiday 4' },
  ];

  operatingHoursTotals: any[] = [
    {type:'Open Hours', value: '4000 kWH', color: 'var(--color8'},
    {type:'Prep Hours', value: '800 kWH', color: 'var(--color5'},
    {type:'Closed Hours', value: '1000 kWH', color:'gray'},
  ];


  oakScore = 92;
  newsData = [];
  weatherData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data: any) => {
      this.newsData = data.articles.slice(0, 3);
    })

    this.apiService.getWeather('kolkata,IN').subscribe((data: any) => {
      if (data.data && data.data.length > 0) {
        this.weatherData = data.data[0];      
      }
      this.apiService.getHomepageApi('January').subscribe((data: any) => {
        console.log(data.data.consumption_overview)
        
      })
    })

  }
}
