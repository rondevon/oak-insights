import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

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
  siteComparisonData: any = {};
  totalSize: any = {total:'1vw',text:'0.7vw',y:'-17'};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSiteComparisonData(this.currentDate.month, this.currentDate.year).
      subscribe((data: any) => {
        this.siteComparisonData = data.data;
      });
  }

}
