import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings-calculator',
  templateUrl: './savings-calculator.component.html',
  styleUrls: ['./savings-calculator.component.scss']
})
export class SavingsCalculatorComponent implements OnInit {

  constructor() { }
  donutLegends: any[] =[];
  cost: any ={};
  consumption: any= {};
  emission: any={};

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
  }

}
