import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-savings-calculator',
  templateUrl: './savings-calculator.component.html',
  styleUrls: ['./savings-calculator.component.scss'],
})
export class SavingsCalculatorComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute, private _snackBar: MatSnackBar
    ) {}

  site_slug: any;
  donutLegends: any[] = [];
  pipe = new DatePipe('en-GB');
  selectedDate: Date = new Date(new Date().setMonth((new Date()).getMonth() - 1));
  selectedMonth: any = this.pipe.transform(this.selectedDate, 'MMMM','UTC');

  selectedYear: any = this.pipe.transform(this.selectedDate, 'YYYY','UTC');

  savingsResponseData: any = {};
  savingsProjectedData: any = {};
  loading: boolean = true;
  totalEnergySavings: number = 0;
  totalSavings: any = {};

  ngOnInit(): void {
    this.site_slug = this.route.parent?.parent?.snapshot.params.site_slug;
    this.donutLegends = [
      { text: 'Preparatory Hours', color: 'var(--color3)' },
      { text: 'Operating Hours', color: 'var(--color8)' },
      { text: 'Non Operating Hours', color: 'var(--color2)' },
      { text: 'Closed Hours', color: 'var(--color5)' },
    ];
    this.totalSavings.petrol = 0;
    this.totalSavings.distance = 0;
    this.totalSavings.smartphone = 0;
    this.totalSavings.trees = 0;
    this.totalSavings.electricity = 0;
    this.totalSavings.trash = 0;
    this.getSavingsResponseData(this.selectedMonth, this.selectedYear, this.site_slug);
  }

  onUpdateSavings(event: any, index: number) {
    var projectedData = this.savingsProjectedData;
    var percentage = event && event.target && event.target.value ? (100-parseInt(event.target.value)) * 0.01: 1;
    projectedData.values_cost[index].y = percentage * this.savingsResponseData.values_cost[index].y;
    projectedData.values_consumption[index].y = percentage * this.savingsResponseData.values_consumption[index].y;
    projectedData.values_c02[index].y = percentage * this.savingsResponseData.values_c02[index].y;
    projectedData.total_cost = this.getGroupTotals(projectedData.values_cost);
    projectedData.total_consumption = this.getGroupTotals(projectedData.values_consumption);
    projectedData.total_c02 = this.getGroupTotals(projectedData.values_c02);
    this.savingsProjectedData = projectedData;
    this.totalEnergySavings = this.getSavingsTotal(this.savingsResponseData.values_consumption, this.savingsProjectedData.values_consumption);
    this.totalSavings.petrol = (Math.round((this.totalEnergySavings*0.000709)/0.01018)).toLocaleString();
    this.totalSavings.distance = (Math.round((this.totalEnergySavings*0.000709)/0.000398)).toLocaleString();
    this.totalSavings.smartphone = (Math.round((this.totalEnergySavings*0.000709)/0.00000822)).toLocaleString();
    this.totalSavings.trees = (Math.round((this.totalEnergySavings*0.000709)/0.06)).toLocaleString();
    this.totalSavings.electricity = (Math.round((this.totalEnergySavings*0.000709)/5.505*365)).toLocaleString();
    this.totalSavings.trash = (Math.round((this.totalEnergySavings*0.000709)/0.023)).toLocaleString();
  }

  getSavingsTotal(actualConsumption: any [], projectedConsumption: any[]): number {
    var total = 0
    for (let i=0; i<actualConsumption.length; i++){
      total+= actualConsumption[i].y - projectedConsumption[i].y;
    }
    return total;
  }

  getGroupTotals(arr: any[]) {
    return arr
      .map((item: any) => item.y)
      .reduce((prev: any, next: any) => prev + next);
  }

  getSavingsResponseData(selectedMonth: any, selectedYear: any, site_slug: String) {
    this.loading = true;
    this.apiService.getSavingsData(selectedMonth,selectedYear,site_slug).subscribe((data : any) => {
    this.savingsResponseData = data.data;
    this.savingsProjectedData = JSON.parse(JSON.stringify(this.savingsResponseData));
    this.loading = false;
     }, err => this.openSnackBar(err.error.message, 'Dismiss'));

  }
  openSnackBar(message: string, action: string = 'Cancel') {
    this._snackBar.open(message, action, { duration: 3000 });
  }
}
