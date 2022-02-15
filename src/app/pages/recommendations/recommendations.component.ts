import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';


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
    month: this.pipe.transform(new Date(), 'MMMM'),
    year: this.pipe.transform(new Date(), 'YYYY')
  }
  error: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.site_slug=this.route.parent?.parent?.snapshot.params.site_slug;
    this.apiService.getRecommendations(this.selectedMonth, this.site_slug).subscribe((data: any) => { 
      // console.log(data);
      this.error = undefined;
      this.monthsList = data.data.map((element: any) => {
        return ({
          month: element.month + element.year,
          data: [{
            title: element.title,
            description: element.description
          }]
        })
      })
    }, err => {
      console.log(err.error.message);
      this.error = err.error.message;
    });
  }
}


