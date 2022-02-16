import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-multi-site-comparison',
  templateUrl: './multi-site-comparison.component.html',
  styleUrls: ['./multi-site-comparison.component.scss']
})
export class MultiSiteComparisonComponent implements OnInit {
  
  pipe = new DatePipe('en-GB');
  selectedDate: Date = new Date(new Date().setMonth((new Date()).getMonth() - 1));
  currentDate: any = {
    month: this.pipe.transform(this.selectedDate, 'MMMM'),
    year: this.pipe.transform(this.selectedDate, 'YYYY'),
  };
  minDate: Date;
  maxDate: Date;
  siteComparisonData: any [] = [];
  totalSize: any = {total:'1vw',text:'0.7vw',y:'-17'};
  treeMapData: any[] = [];
  treeMapTotal: number = 0;
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
    name: 'Energy Cost (£)',
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
    name: 'Operating Hours Consumption (kWh)',
    key: 'stats',
    secondaryKey: 'operating_energy'
  },
  {
    name: 'Non Operating Hours Consumption (kWh)',
    key: 'stats',
    secondaryKey: 'non_operating_energy'
  },
  {
    name: 'Preparatory Hours Consumption (kWh)',
    key: 'stats',
    secondaryKey: 'preparatory_energy'
  },
  {
    name: 'Closed Hours Consumption (kWh)',
    key: 'stats',
    secondaryKey: 'closed_energy'
  }];

  loading: boolean = true;

  constructor(private apiService: ApiService, private _snackBar: MatSnackBar
    ) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setMonth(this.minDate.getMonth() - 4);
    this.maxDate.setMonth(this.maxDate.getMonth() - 1);
   }

  ngOnInit(): void {
    this.getMultiSiteComparison(this.currentDate.month,this.currentDate.year);
  }

  ngOnChanges() {
  }

  getMultiSiteComparison(month: string, year: string){
    this.loading = true;
    this.apiService.getSiteComparisonData(month, year).
      subscribe((data: any) => {
        this.loading = false;
        this.siteComparisonData = data.data;
          var tree: any[] = [];
          console.log(this.siteComparisonData)
          for (let i=0;i<this.siteComparisonData.length;i++){
                (this.siteComparisonData[i].stats.co2_emission).toLocaleString();
          }
          this.siteComparisonData.forEach((site, index) => {
            tree.push({
              name: site.name,
              value: site.stats.cost,
              color: this.colors[index]
            });
            this.treeMapTotal+= Number(site.stats.cost);
            console.log('site.stats.cost',site.stats.cost)
          });
          this.treeMapData = tree;
      }, err => {
       this.openSnackBar(err.error.message, 'Dismiss')
        this.loading = false;
      });
      
  }

  updateMonth(){
    this.currentDate = {
      month: this.pipe.transform(this.currentDate, 'MMMM'),
      year: this.pipe.transform(this.currentDate, 'YYYY')
    };
    this.getMultiSiteComparison(this.currentDate.month,this.currentDate.year);
  }

  openSnackBar(message: string, action: string = 'Cancel') {
    this._snackBar.open(message, action, { duration: 3000 });
  }

}
