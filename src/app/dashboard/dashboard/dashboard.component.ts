import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  site_slug:any ;
  ngOnInit(): void {
    this.site_slug = this.route.snapshot.queryParamMap.get('site_slug');
    alert(this.site_slug);
  }

}
