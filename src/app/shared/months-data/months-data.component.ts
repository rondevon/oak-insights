import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-months-data',
  templateUrl: './months-data.component.html',
  styleUrls: ['./months-data.component.scss'],
})
export class MonthsDataComponent implements OnInit {
  @Input('data') data: any;

  constructor() {}

  ngOnInit(): void {}

}
