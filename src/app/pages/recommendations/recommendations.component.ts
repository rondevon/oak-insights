import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

const MONTHS = [
  'january', 'february', 'march', 'april', 'may',
  'june', 'july', 'august', 'september',
  'october', 'november', 'december'
];

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {
  monthsList: any[] = [];
  pipe = new DatePipe('en-GB');
  data: any;
  site_slug: any;
  selectedMonth: any = {
    month: this.pipe.transform(new Date(), 'MMMM','UTC'),
    year: this.pipe.transform(new Date(), 'YYYY','UTC')
  }
  error: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.site_slug=this.route.parent?.parent?.snapshot.params.site_slug;
    this.apiService.getRecommendations(this.selectedMonth, this.site_slug).subscribe((data: any) => { 
      this.error = undefined;
      this.monthsList = data.data.map((element: any) => {
        return ({
          date: new Date(element.year, this.getMonth(element.month), 1, 0, 0, 0, 0),
          data: [{
            title: element.title,
            description: element.description
          }]
        })
      })
      if (this.monthsList.length > 1) {
        this.monthsList = this.monthsList.sort((a,b) => b.date - a.date);
        let x = [this.monthsList[0]];
        let l = 0;
        for (let i = 1; i < this.monthsList.length; i++) {
          const element = this.monthsList[i];
          if (+element.date === +this.monthsList[i-1].date) {
            x[l].data.push(element.data[0])
          } else {
            x.push(element);
            l = l+1;
          }
        }
        this.monthsList = x;
      }
    }, err => {
      // console.log(err.error.message);
      this.error = err.error.message;
    });
  }

  getMonth(month: string) { 
    return MONTHS.findIndex(m => m === month.toLowerCase());
  }
}


