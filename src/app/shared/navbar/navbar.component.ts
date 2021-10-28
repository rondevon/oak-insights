import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  host: { class: 'background-theme' },
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selected = -1;
  menu = [
    { path: './pages/home', name: 'Home', index: 0, onlyadmin: false },
    { path: './pages/basic-insights', name: 'Basic Insights', index: 1, onlyadmin: false  },
    { path: './pages/deep-insights', name: 'Deep Insights', index: 2, onlyadmin: false  },
    { path: './pages/multi-site-comparison', name: 'Multi-site Comparison', index: 3, onlyadmin: true},
    { path: './pages/phase-distribution', name: 'Phase Distribution', index: 4, onlyadmin: false  },
    { path: './pages/appliance-comparison', name: 'Appliance Comparisons', index: 5, onlyadmin: false  },
    { path: './pages/savings-calculator', name: 'Savings Calculator', index: 6, onlyadmin: false  },
    { path: './pages/recommendations', name: 'Recommendations', index: 7, onlyadmin: false  },
  ]
  isAdmin: boolean = false;
  // menu = ['Home', 'Basic Insights', 'Deep Insights', 'Multi-site Comparison', 'Phase Distribution', 'Appliance Comparisons', 'Savings Calculator', 'Recommendations']
  constructor(private router: Router) {
    router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          this.selected = -1;
          var x = '.'+val.url;
          const y = this.menu.find(m => x.match(m.path));    
          if (y) this.selected = y.index;
          console.log(val.url)
        }
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('role') === "Account Manager") this.isAdmin = true;
  }

}
