import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { AddEventDialogComponent } from '../add-event-dialog/add-event-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  site_slug:any ;
  minDate: Date = new Date();;
  maxDate: Date = new Date();
  pipe = new DatePipe('en-GB');
  cards: any[] = [];
  selectedMonth: any = {
    month: this.pipe.transform(new Date(), 'MMMM'),
    year: this.pipe.transform(new Date(), 'YYYY')
  };
  heatMapData: any = {};
  operatingHoursData: any = {};
  hourlyCostData: any = {};
  selectedDate: Date = new Date(new Date().setMonth(this.minDate.getMonth() - 1));
  faCalendar = faCalendarAlt;

  loading: boolean = true;

  oakScore: number = 0;
  newsData = [];
  weatherData: any;
  consumptionData: any;
  userData: any;
  name: any;
  data: any;

  constructor(private apiService: ApiService, public dialog: MatDialog, private route: ActivatedRoute) {
    this.minDate.setMonth(this.minDate.getMonth() - 4);
    this.maxDate.setMonth(this.maxDate.getMonth());
  }

  ngOnInit(): void { 
    
    this.site_slug=this.route.parent?.parent?.snapshot.params.site_slug;

    this.apiService.getNews().subscribe((data: any) => {
      this.newsData = data.articles.slice(0, 3);
      this.apiService.getWeather('London,GB').subscribe((data: any) => {
        if (data.data && data.data.length > 0) {
          this.weatherData = data.data[0];
        }
        this.apiService.getEvents(this.selectedMonth, this.site_slug).subscribe((data: any) => {
          if (data.data && data.data.length > 0) {
            this.data = data.data;
          }
          this.updateMonth();
        });
      });
    });



  }

  updateMonth() {
    this.selectedMonth = {
      month: this.pipe.transform(this.selectedDate, 'MMMM'),
      year: this.pipe.transform(this.selectedDate, 'YYYY')
    };
    this.apiService
      .getHomepageApi(this.selectedMonth.month, this.selectedMonth.year,this.site_slug)
      .subscribe((data: any) => {
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
      });
      this.getHeatMapDetails(
        this.selectedMonth.month,
        this.selectedMonth.year,
        this.site_slug
      );
      this.getOperatingHoursDetails(
        this.selectedMonth.month,
        this.selectedMonth.year,
        this.site_slug
      );
      this.getHourlyCostDetails(
        this.selectedMonth.month,
        this.selectedMonth.year,
        this.site_slug
      );
  }

  getHeatMapDetails(selectedMonth: String, selectedYear: String, site_slug: String) {
    this.apiService
      .getHeatMapData(selectedMonth, selectedYear, site_slug)
      .subscribe((data) => {
        this.heatMapData = data.data;
      });
  }

  getOperatingHoursDetails(selectedMonth: String, selectedYear: String, site_slug: String) {
    this.apiService
      .getOperatingHoursData(selectedMonth, selectedYear, site_slug)
      .subscribe((data) => {
        this.operatingHoursData = data.data;
      });
  }
  getHourlyCostDetails(selectedMonth: String, selectedYear: String, site_slug: String) {
    this.apiService
      .getHourlyCostData(selectedMonth, selectedYear, site_slug)
      .subscribe((data) => {
        this.hourlyCostData = data.data;
        this.loading = false;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEventDialogComponent);

    dialogRef.afterClosed().subscribe((eventData) => {
      console.log('The dialog was closed', eventData);
      this.apiService.postevent(eventData).subscribe((result) => {
        console.log(result);
        
        if (result.success === 1) {
          this.apiService.getEvents(this.selectedMonth,this.site_slug).subscribe((data: any) => {
            if (data.data && data.data.length > 0) {
              console.log(data.data)
              this.data = data.data;
            }
          });
        }
        // this.data.push(eventData);
        
      })
    });
  }
}
