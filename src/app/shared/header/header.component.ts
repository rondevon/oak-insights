import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/user/auth.service';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-header',
  host: { class: 'background-theme' },
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() showNotification = true;
  notification = true;
  photo: any;
  env: boolean = false;
  sitename: string = '';// = localStorage.getItem('site_name') || '';
  show: boolean = false;
  // showNotification: boolean = localStorage.getItem('role') === 'Account Manager' ? false : true;
  
  constructor(private authService: AuthService, private router: Router, private apiService: ApiService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const x = val.url.split('/');
        if (x.length >= 4) {
          const y = x[3].split('-');
          y.shift();
          y.pop();
          const z = y.toString().replace(/\,/g, ' ');
          if (this.sitename === '') this.sitename = z;
        }
        
      }
  });
  }

  ngOnInit(): void {
    if (environment.production)
    {
      this.env=true
    }
    this.apiService.getMyprofileApi().subscribe((data: any)=> {
      this.photo= data.data.photo;
    });
  }

  logout() {    
    this.authService.logout().subscribe((result) => {
      if (result.success) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    });
  }
}
