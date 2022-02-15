import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-insight-item-tile',
  templateUrl: './insight-item-tile.component.html',
  styleUrls: ['./insight-item-tile.component.scss']
})
export class InsightItemTileComponent implements OnInit {
  @Input('data') data: any;
  

  constructor() { }

  ngOnInit(): void {
    if(this.data.title === 'Trend vs Last Month')
    {
      this.data.value = (this.data.value>0?"+":'')+(this.data.value).toLocaleString();
    }
    else{
      this.data.value = (this.data.value).toLocaleString();
    }
    
  }

}
