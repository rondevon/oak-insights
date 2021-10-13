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
    this.data.value = (this.data.value).toLocaleString();
  }

}
