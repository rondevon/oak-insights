import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oak-insights';

  constructor(router: Router) {
    router.events.subscribe((val) => {      
      if (val instanceof NavigationEnd) {
        localStorage.setItem('url', val.url);
      }
      
    });
  }
}
