import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  host: { class: 'background-theme' },
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  notification = true;
  constructor() { }

  ngOnInit(): void {
  }

}
