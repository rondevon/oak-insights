import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Chart } from 'angular-highcharts';
import { ApiService } from 'src/app/services/api.service';
import { AddEventDialogComponent } from './add-event-dialog/add-event-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pipe = new DatePipe('en-GB');
  cards: any[] = [];
  selectedMonth: string = this.pipe.transform(new Date(), 'MMMM') || '';
  heatMapData: any = {};
  operatingHoursData: any ={};
  hourlyCostData: any ={};

  loading: boolean = true;

  monthList: String[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  oakScore: number = 0;
  newsData = [];
  weatherData: any;
  consumptionData: any;
  userData: any;
  name: any;
  data: any;

  constructor(private apiService: ApiService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loading = false;
    this.apiService.getNews().subscribe((data: any) => {
      this.newsData = data.articles.slice(0, 3);
    })

    this.apiService.getWeather('London,GB').subscribe((data: any) => {
      if (data.data && data.data.length > 0) {
        this.weatherData = data.data[0];      
      }
    })

    this.apiService.getEvents(this.selectedMonth).subscribe((data: any) => {
      if (data.data && data.data.length > 0) {
        this.data = data.data;
      }
    })

    this.updateMonth();
  }
  
  updateMonth() {
    // console.log(this.selectedMonth);
    this.apiService.getHomepageApi(this.selectedMonth).subscribe((data: any) => {
      this.consumptionData = data.data.consumption_overview;
      this.oakScore = data.data.oak_score;
      this.cards = [
        {
          image: '/assets/icons/icon-energy-usage.svg',
          title: 'Energy Usage',
          value: data.data.stats.energy,
          unit: 'kWh',
          color: 'var(--color5)',
        },
        {
          image: '/assets/icons/icon-co2-emission.svg',
          title: 'CO2 Emission(kg)',
          value: data.data.stats.co2_emission,
          unit: 'kg',
          color: 'var(--color6)',
        },
        {
          image: '/assets/icons/icon-closed-hours.svg',
          title: 'Closed-hours',
          value: data.data.stats.closed_hour_energy,
          unit: 'kWh',
          color: 'var(--color8)',
        },
        {
          image: '/assets/icons/icon-energy-intensity.svg',
          title: 'Energy Intensity ',
          value: data.data.stats.energy_intensity,
          unit: 'kWh/m2',
          color: 'var(--color5)',
        },
        {
          image: '/assets/icons/icon-offset-planting.svg',
          title: 'Offset by Planting',
          value: data.data.stats.offset_planting,
          unit: 'Oak Trees',
          color: 'var(--color5)',
        },
        {
          image: '/assets/icons/icon-trend.svg',
          title: 'Trend vs Last Month',
          value: data.data.stats.trend_over_last,
          unit: '%',
          color: 'var(--color7)',
        },
      ];
      this.getHeatMapDetails(this.selectedMonth);
      this.getOperatingHoursDetails(this.selectedMonth);
      this.getHourlyCostDetails(this.selectedMonth);
    })
  }

  getHeatMapDetails(selectedMonth: String){
    this.apiService.getHeatMapData(selectedMonth).subscribe(data => {
      this.heatMapData = data.data;
    });
  }

  getOperatingHoursDetails(selectedMonth: String){
    this.apiService.getOperatingHoursData(selectedMonth).subscribe(data => {
      this.operatingHoursData = data.data;
    });
  }
  getHourlyCostDetails(selectedMonth: String){
    this.apiService.getHourlyCostData(selectedMonth).subscribe(data => {
      this.hourlyCostData = data.data;
    });
  }
  
  openDialog(): void {
    const modalRef = this.modalService.open(AddEventDialogComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed', result);
    //   if (result)
    //   this.data.push(result);
    // });
  }
}
