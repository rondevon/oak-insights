import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phase-appliance',
  templateUrl: './phase-appliance.component.html',
  styleUrls: ['./phase-appliance.component.scss']
})
export class PhaseApplianceComponent implements OnInit {

  phaseTotals: any = {};
  applianceList: any = {};
  constructor() { }

  ngOnInit(): void {
    this.phaseTotals = [
      { type:'Phase R', value: '(150kwh, 33.33%)', color: 'var(--color8'},
      { type:'Phase S', value: '(160kwh, 36.75%)', color: 'var(--color6'},
      { type:'Phase T', value: '(140kwh, 32.45%)', color:'var(--color5'},
    ];
    this.applianceList =[
      {
        phase:['HVAC1 - AC', 'HVAC2 - AC', 'HVAC3 - AC']
      },
      {
        phase:['Refrigerator', 'HVAC4 - Radiator']
      },
      {
        phase:['Office Server', 'HVAC2 - AC', 'HVAC3 - AC']
      },  
    ]
  }

}
