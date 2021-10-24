import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-savings-calculator',
  templateUrl: './savings-calculator.component.html',
  styleUrls: ['./savings-calculator.component.scss']
})
export class SavingsCalculatorComponent implements OnInit {

  constructor(private apiService: ApiService,
    private cdRef: ChangeDetectorRef) { }
  
  donutLegends: any[] =[];
  cost: any ={};
  consumption: any= {};
  emission: any={};
  pipe = new DatePipe('en-GB');
  selectedMonth: any = this.pipe.transform(new Date(), 'MMMM');
  selectedYear: any = this.pipe.transform(new Date(), 'YYYY');
  savingsResponseData: any = {};
  savingsProjectedData: any = {};

  ngOnInit(): void {

    this.donutLegends = [
      { text:'Preparatory Hours', color:'var(--color3)'},
      { text: 'Operating Hours', color:'var(--color8)'},
      { text:'Non Operating Hours', color:'var(--color2)'},
      { text:'Closed Hours', color:'var(--color5)'},
    ];

    this.getSavingsResponseData(this.selectedMonth, this.selectedYear);
  }
  
  onUpdatePrep(event: any){
    if (event && event.target && event.target.value) {
      this.savingsProjectedData.values_cost[0].y = (100-parseInt(event.target.value)) * this.savingsResponseData.values_cost[0].y;
      this.savingsProjectedData.values_consumption[0].y = (100-parseInt(event.target.value)) * this.savingsResponseData.values_consumption[0].y;
      this.savingsProjectedData.values_c02[0].y = (100-parseInt(event.target.value)) * this.savingsResponseData.values_c02[0].y;
      // this.cdRef.detectChanges();
    }
  }

  getSavingsResponseData(selectedMonth: any, selectedYear: any){
    this.apiService.getSavingsData(selectedMonth,selectedYear).subscribe((data : any) => {
      this.savingsResponseData = data.data;
      this.savingsProjectedData = this.savingsResponseData;
    });
  }

}
