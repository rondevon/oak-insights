import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  host: { class: 'background-theme' },
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu = [
    { path: './pages/home', name: 'Home' },
    { path: './pages/basic-insights', name: 'Basic Insights' },
    { path: './pages/deep-insights', name: 'Deep Insights' },
    { path: './pages/multi-site-comparison', name: 'Multi-site Comparison' },
    { path: './pages/phase-distribution', name: 'Phase Distribution' },
    { path: './pages/appliance-comparison', name: 'Appliance Comparisons' },
    { path: './pages/savings-calculator', name: 'Savings Calculator' },
    { path: './pages/recommendations', name: 'Recommendations' },
    
  ]
  // menu = ['Home', 'Basic Insights', 'Deep Insights', 'Multi-site Comparison', 'Phase Distribution', 'Appliance Comparisons', 'Savings Calculator', 'Recommendations']
  constructor() { }

  ngOnInit(): void {
  }

}
