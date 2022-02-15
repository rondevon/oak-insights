import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  site_slug:any ;
  hourlyCostData: any = {};
  pipe = new DatePipe('en-GB');
  selectedDate: Date = new Date(new Date().setMonth((new Date()).getMonth() - 1));
  selectedMonth: any = {
    month: this.pipe.transform(this.selectedDate, 'MMMM'),
    year: this.pipe.transform(this.selectedDate, 'YYYY')
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
   this.getHourlyCostDetails(
      this.selectedMonth.month,
      this.selectedMonth.year,
     );
  }
   getHourlyCostDetails(selectedMonth: String, selectedYear: String,) {
    this.apiService
      .getHourlyCostData(selectedMonth, selectedYear, this.site_slug)
      .subscribe((data) => {
        this.hourlyCostData = data.data;
      });
   } 
}


