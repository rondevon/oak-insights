import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-alerts',
  templateUrl: './shared-alerts.component.html',
  styleUrls: ['./shared-alerts.component.scss']
})
export class SharedAlertsComponent implements OnInit {
  @Output() onclose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
