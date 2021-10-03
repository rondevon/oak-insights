import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-news',
  templateUrl: './google-news.component.html',
  styleUrls: ['./google-news.component.scss']
})
export class GoogleNewsComponent implements OnInit {

  @Input('data') data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
