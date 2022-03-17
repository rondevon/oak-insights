import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  // site_slug:any ;
  ngOnInit(): void {
    // this.site_slug = this.route.snapshot.queryParamMap.get('site_slug');
    //alert(this.site_slug);
  }

}
