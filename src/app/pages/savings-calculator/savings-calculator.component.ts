import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-savings-calculator',
  templateUrl: './savings-calculator.component.html',
  styleUrls: ['./savings-calculator.component.scss']
})
export class SavingsCalculatorComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  donutLegends: any[] =[];
  cost: any ={};
  consumption: any= {};
  emission: any={};
  pipe = new DatePipe('en-GB');
  selectedMonth: any = this.pipe.transform(new Date(), 'MMMM');
  selectedYear: any = this.pipe.transform(new Date(), 'YYYY');
  savingsActualData: any = {};


  ngOnInit(): void {
    this.cost = 'cost';
    this.consumption = 'consumption';
    this.emission = 'emission';

    this.donutLegends = [
      { text:'Preparatory Hours', color:'var(--color3)'},
      { text: 'Operating Hours', color:'var(--color8)'},
      { text:'Non Operating Hours', color:'var(--color2)'},
      { text:'Closed Hours', color:'var(--color5)'},
    ];

    this.getSavingsActualData(this.selectedMonth, this.selectedYear);
  }
  


  getSavingsActualData(selectedMonth: any, selectedYear: any){
    this.apiService.getSavingsData(selectedMonth,selectedYear).subscribe((data : any) => {
      this.savingsActualData = data.data;
      console.log(this.savingsActualData);
    });
  }

}
