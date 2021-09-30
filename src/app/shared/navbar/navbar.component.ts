import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  host: { class: 'background-theme' },
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu = [
    { path: '/home', name: 'Home' },
    { path: '/basic-insights', name: 'Basic Insights' },
    { path: '/deep-insights', name: 'Deep Insights' },
    { path: '/multi-site-comparison', name: 'Multi-site Comparison' },
    { path: '/phase-distribution', name: 'Phase Distribution' },
    { path: '/appliance-comparisons', name: 'Appliance Comparisons' },
    { path: '/savings-calculator', name: 'Savings Calculator' },
    { path: '/recommendations', name: 'Recommendations' },
    
  ]
  // menu = ['Home', 'Basic Insights', 'Deep Insights', 'Multi-site Comparison', 'Phase Distribution', 'Appliance Comparisons', 'Savings Calculator', 'Recommendations']
  constructor() { }

  ngOnInit(): void {
  }

}
