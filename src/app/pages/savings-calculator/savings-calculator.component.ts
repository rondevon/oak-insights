import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-savings-calculator',
  templateUrl: './savings-calculator.component.html',
  styleUrls: ['./savings-calculator.component.scss']
})
export class SavingsCalculatorComponent implements OnInit {

  constructor(private apiService: ApiService,
    private cdRef: ChangeDetectorRef,  private route: ActivatedRoute) { }
  
  site_slug:any ;
  donutLegends: any[] =[];
  cost: any ={};
  consumption: any= {};
  emission: any={};
  pipe = new DatePipe('en-GB');
  selectedMonth: any = this.pipe.transform(new Date(), 'MMMM');
  selectedYear: any = this.pipe.transform(new Date(), 'YYYY');
  savingsResponseData: any = {};
  savingsProjectedData: any = {};
  loading: boolean = true;
  
  ngOnInit(): void {
    this.site_slug=this.route.parent?.parent?.snapshot.params.site_slug;
    this.donutLegends = [
      { text:'Preparatory Hours', color:'var(--color3)'},
      { text: 'Operating Hours', color:'var(--color8)'},
      { text:'Non Operating Hours', color:'var(--color2)'},
      { text:'Closed Hours', color:'var(--color5)'},
    ];
    this.getSavingsResponseData(this.selectedMonth, this.selectedYear, this.site_slug)
  }
  
  onUpdateSavings(event: any, index: number){
    var projectedData = this.savingsProjectedData;
    if (event && event.target && event.target.value) {
      var percentage = parseInt(event.target.value) * 0.01;
      projectedData.values_cost[index].y = percentage * this.savingsResponseData.values_cost[index].y;
      projectedData.values_consumption[index].y = percentage * this.savingsResponseData.values_consumption[index].y;
      projectedData.values_c02[index].y = percentage * this.savingsResponseData.values_c02[index].y;
      projectedData.total_cost = this.getGroupTotals(projectedData.values_cost);
      projectedData.total_consumption = this.getGroupTotals(projectedData.values_consumption);
      projectedData.total_c02 = this.getGroupTotals(projectedData.values_c02);
    } 
    this.savingsProjectedData = projectedData;
  }

  getGroupTotals(arr: any[]) {
    return arr.map((item: any) => item.y).reduce((prev: any, next: any) => prev + next);
  }

  getSavingsResponseData(selectedMonth: any, selectedYear: any, site_slug: String){
    this.loading = true;
    this.apiService.getSavingsData(selectedMonth, selectedYear, site_slug).subscribe((data : any) => {
      this.savingsResponseData = data.data;
      this.savingsProjectedData = JSON.parse(JSON.stringify(this.savingsResponseData));
      this.loading = false;
    });
  }

}
