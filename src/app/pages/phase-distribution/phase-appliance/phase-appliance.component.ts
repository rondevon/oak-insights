import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phase-appliance',
  templateUrl: './phase-appliance.component.html',
  styleUrls: ['./phase-appliance.component.scss']
})
export class PhaseApplianceComponent implements OnInit {
  @Input('data') data: any;
  phaseApplianceData: any ={}
  phaseTotals: any = {};
  applianceList: any = {};
  loading: boolean = true;
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.phaseTotals = [
      { name:'Phase L1', value: '(150kWh, 33.33%)', color: 'var(--color8'},
      { name:'Phase L2', value: '(160kWh, 36.75%)', color: 'var(--color6'},
      { name:'Phase L3', value: '(140kWh, 32.45%)', color:'var(--color5'},
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
  ngOnChanges()
  {
    this.apiService
      .getPhaseApplianceData(this.data.selectedMonth, this.data.selectedYear, this.data.type, this.data.site_slug)
      .subscribe((data) => {
        this.phaseApplianceData = data.data;
        this.loading = false;
      });
  }

}
