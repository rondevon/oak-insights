import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  host: { class: 'background-theme' },
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selected = 0;
  menu = [
    { path: './pages/home', name: 'Home', index: 0 },
    { path: './pages/basic-insights', name: 'Basic Insights', index: 1 },
    { path: './pages/deep-insights', name: 'Deep Insights', index: 2 },
    { path: './pages/multi-site-comparison', name: 'Multi-site Comparison', index: 3 },
    { path: './pages/phase-distribution', name: 'Phase Distribution', index: 4 },
    { path: './pages/appliance-comparison', name: 'Appliance Comparisons', index: 5 },
    { path: './pages/savings-calculator', name: 'Savings Calculator', index: 6 },
    { path: './pages/recommendations', name: 'Recommendations', index: 7 },
  ]
  // menu = ['Home', 'Basic Insights', 'Deep Insights', 'Multi-site Comparison', 'Phase Distribution', 'Appliance Comparisons', 'Savings Calculator', 'Recommendations']
  constructor() { }

  ngOnInit(): void {
  }

}
