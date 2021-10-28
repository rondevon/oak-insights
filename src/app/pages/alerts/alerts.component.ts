import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  hourlyCostData: any = {};
  pipe = new DatePipe('en-GB');
  selectedMonth: any = {
    month: this.pipe.transform(new Date(), 'MMMM'),
    year: this.pipe.transform(new Date(), 'YYYY')
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getHourlyCostDetails(
      this.selectedMonth.month,
      this.selectedMonth.year
    );
  }
  getHourlyCostDetails(selectedMonth: String, selectedYear: String) {
    this.apiService
      .getHourlyCostData(selectedMonth, selectedYear)
      .subscribe((data) => {
        this.hourlyCostData = data.data;
      });
  }
}
