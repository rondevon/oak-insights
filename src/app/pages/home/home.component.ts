import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { AddEventDialogComponent } from '../add-event-dialog/add-event-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isChecked: boolean = false;
  site_slug:any ;
  minDate: Date = new Date();
  type: string | undefined;
  maxDate: Date = new Date();
  pipe = new DatePipe('en-GB');
  cards: any[] = [];
  selectedMonth: any = {
    month: this.pipe.transform(new Date(), 'MMMM','UTC'),
    year: this.pipe.transform(new Date(), 'YYYY','UTC')
  };
  heatMapData: any = {};
  operatingHours: any = {};
  hourlyCostData: any = {};
  sensorStatus: any = {};
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

  constructor(
    private apiService: ApiService, 
    public dialog: MatDialog, 
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
    
    ) {
      const x = sessionStorage.getItem('onboarding')?.split('-') || [];
    if (x.length > 0) this.minDate.setFullYear(+x[0], +x[1]-1, +x[2]);
    this.maxDate.setMonth(this.maxDate.getMonth());
  }

  ngOnInit(): void {
    this.site_slug=this.route.parent?.parent?.snapshot.params.site_slug;
    this.updateMonth();
    this.operatingHours = {graphType:'energy', selectedDate:this.selectedMonth, site_slug:this.site_slug};
    this.apiService.getNews().subscribe((data: any) => {
      this.newsData = data.articles.slice(0, 3) || [];
    }, err => {
      this.newsData = []
     this.openSnackBar(err.error.message, 'Dismiss')});
      this.apiService.getWeather('London,GB').subscribe((data: any) => {
        if (data.data && data.data.length > 0) {
          this.weatherData = data.data[0];
        }
      }, err => this.openSnackBar(err.error.message, 'Dismiss'));
  }

  updateMonth() {
    //this.loading = true;
    this.selectedMonth = {
      month: this.pipe.transform(this.selectedDate, 'MMMM','UTC'),
      year: this.selectedDate.getFullYear()
    };
    this.operatingHours = {graphType:'energy', selectedDate:this.selectedMonth, site_slug:this.site_slug};
    this.apiService
      .getHomepageApi(this.selectedMonth.month, this.selectedMonth.year,this.site_slug)
      .subscribe((data: any) => {
      this.consumptionData = data.data.consumption_overview;
      // console.log(this.consumptionData, data.data.consumption_overview);
        
        if(this.selectedMonth.month === this.pipe.transform(new Date(), 'MMMM','UTC') && 
        this.selectedMonth.year == this.pipe.transform(new Date(), 'YYYY','UTC'))
        {
          this.consumptionData.isCurrrentMonth = true;  
        }
        else
        {
          this.consumptionData.isCurrrentMonth = false;
        }
        
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
            unit: '%',
            color: 'var(--color8)',
          },
          {
            image: '/assets/icons/icon-energy-intensity.svg',
            title: 'Energy Intensity',
            value: data.data.stats.energy_intensity,
            unit: 'kWh/m²',
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
      }, err => this.openSnackBar(err.error.message, 'Dismiss'));
      this.isChecked = false;
      this.change();
      this.getHourlyCostDetails(
        this.selectedMonth.month,
        this.selectedMonth.year,
        this.site_slug
      );
      this.getSensorStatusDetails(this.site_slug);
        
    this.apiService.getEvents(this.selectedMonth, this.site_slug).subscribe((data: any) => {
      if (data.data && data.data.length > 0) {
        this.data = data.data;
      }
    }, err => this.openSnackBar(err.error.message, 'Dismiss'));
  }

 

  getHeatMapDetails(selectedMonth: String, selectedYear: String, site_slug: String, type?: string) {
    this.apiService
      .getHeatMapData(selectedMonth, selectedYear, site_slug, type)
      .subscribe((data) => {
        this.heatMapData = data.data;
        this.type = type;
      }, err => this.openSnackBar(err.error.message, 'Dismiss'));
  }

  getHourlyCostDetails(selectedMonth: String, selectedYear: String, site_slug: String) {
    this.apiService
      .getHourlyCostData(selectedMonth, selectedYear, site_slug)
      .subscribe((data) => {
        // console.log('data', data);
        
        this.hourlyCostData = data;
        this.loading = false;
      }, err => this.openSnackBar(err.error.message, 'Dismiss'));
  }
  getSensorStatusDetails(site_slug: String)
  {
    this.apiService
      .getSensorStatusData(site_slug)
      .subscribe((data) => {
        this.sensorStatus = data.data;
      }, err => this.openSnackBar(err.error.message, 'Dismiss'));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEventDialogComponent);

    dialogRef.afterClosed().subscribe((eventData) => {
      console.log('The dialog was closed', eventData, this.site_slug);
      this.apiService.postevent(eventData, this.site_slug).subscribe((result) => {        
        if (result.success === 1) {
          this.apiService.getEvents(this.selectedMonth,this.site_slug).subscribe((data: any) => {
            if (data.data && data.data.length > 0) {
              // console.log(data.data)
              this.data = data.data;
            }
          }, err => this.openSnackBar(err.error.message, 'Dismiss'));
        }
        // this.data.push(eventData);
        
      })
    });
  }

  change() {
    if (this.isChecked) {
      this.getHeatMapDetails(
        this.selectedMonth.month,
        this.selectedMonth.year,
        this.site_slug
        );
      } else {
        this.getHeatMapDetails(
          this.selectedMonth.month,
          this.selectedMonth.year,
          this.site_slug,
          'daily'
      );
    }
  }

  openSnackBar(message: string, action: string = 'Cancel') {
    this._snackBar.open(message, action, { duration: 3000 });
  }
}
