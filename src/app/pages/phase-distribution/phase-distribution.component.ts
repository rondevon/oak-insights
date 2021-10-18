import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phase-distribution',
  templateUrl: './phase-distribution.component.html',
  styleUrls: ['./phase-distribution.component.scss']
})
export class PhaseDistributionComponent implements OnInit {

  constructor() { }
  
  phase: any ={};
  

  ngOnInit(): void {
    this.phase = 'phase'
  }

}
