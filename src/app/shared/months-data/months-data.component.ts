import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-months-data',
  templateUrl: './months-data.component.html',
  styleUrls: ['./months-data.component.scss'],
})
export class MonthsDataComponent implements OnInit {
  @Input('data') data: any;
  class: string = 'fa fa-plus';
  click: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onChange(i: number): void { 
    // if (!this.data.data[i].description) return;
    this.data.data[i].class = (this.data.data[i]?.click === true) ? 'fa fa-plus' : 'fa fa-minus';
    this.data.data[i].click = this.data.data[i]?.click ? !this.data.data[i].click : true;
  }
}
