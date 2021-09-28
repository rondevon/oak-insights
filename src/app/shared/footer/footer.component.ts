import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  host: { class: 'background-theme' },
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
