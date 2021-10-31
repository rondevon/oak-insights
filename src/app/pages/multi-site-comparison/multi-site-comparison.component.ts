import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multi-site-comparison',
  templateUrl: './multi-site-comparison.component.html',
  styleUrls: ['./multi-site-comparison.component.scss']
})
export class MultiSiteComparisonComponent implements OnInit {
  pipe = new DatePipe('en-GB');
  currentDate: any = {
    month: this.pipe.transform(new Date(), 'MMMM'),
    year: this.pipe.transform(new Date(), 'YYYY'),
  };
  minDate: Date;
  maxDate: Date;
  siteComparisonData: any [] = [];
  totalSize: any = {total:'1vw',text:'0.7vw',y:'-17'};
  treeMapData: any[] = [];
  faCalendar = faCalendarAlt;
  colors: String[] = [
    '#364096',
    '#70c49c',
    '#F8A992',
    '#FCC294'
  ];

  basicInsightLabels: any[] = [{
    name: 'Energy Supplier',
    key: 'electric_provider',
    secondaryKey: 'name'
  },
  {
    name: 'Energy Usage (kWh)',
    key: 'stats',
    secondaryKey: 'energy'
  },
  {
    name: 'CO2 Emission (kg)',
    key: 'stats',
    secondaryKey: 'co2_emission'
  },
  {
    name: 'Enery Cost (£)',
    key: 'stats',
    secondaryKey: 'cost'
  }, 
  {
    name: 'Peak Usage (kWh)',
    key: 'stats',
    secondaryKey: 'peak',
    tertiaryKey: 'energy'
  },
  {
    name: 'Peak Time',
    key: 'stats',
    secondaryKey: 'peak',
    tertiaryKey: 'time'
  }
];

  informationLabels: any[] = [{
    name: 'Area (sq.m)',
    key: 'area',
  },
  {
    name: 'No. of Employees',
    key: 'employees'
  },
  {
    name: 'No of Appliances',
    key: 'appliances'
  },
  {
    name: 'No of Sensors',
    key: 'devices_count'
  },
  {
    name: 'Operating Hours Consumption',
    key: 'stats',
    secondaryKey: 'operating_energy'
  },
  {
    name: 'Non Operating Hours Consumption',
    key: 'stats',
    secondaryKey: 'non_operating_energy'
  },
  {
    name: 'Preparatory Hours Consumption',
    key: 'stats',
    secondaryKey: 'preparatory_energy'
  },
  {
    name: 'Closed Hours Consumption',
    key: 'stats',
    secondaryKey: 'closed_energy'
  }];

  constructor(private apiService: ApiService) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setMonth(this.minDate.getMonth() - 4);
    this.maxDate.setMonth(this.maxDate.getMonth());
   }

  ngOnInit(): void {
    this.getMultiSiteComparison(this.currentDate.month,this.currentDate.year);
  }

  ngOnChanges() {
  }

  getMultiSiteComparison(month: string, year: string){
    this.apiService.getSiteComparisonData(month, year).
      subscribe((data: any) => {
        this.siteComparisonData = data.data;
          var tree: any[] = []
          this.siteComparisonData.forEach((site, index) => {
            tree.push({
              name: site.name,
              value: site.stats.cost,
              color: this.colors[index]
            });
          });
          this.treeMapData = tree;
      });
      
  }

  updateMonth(){
    this.currentDate = {
      month: this.pipe.transform(this.currentDate, 'MMMM'),
      year: this.pipe.transform(this.currentDate, 'YYYY')
    };
    this.getMultiSiteComparison(this.currentDate.month,this.currentDate.year);
  }

}
