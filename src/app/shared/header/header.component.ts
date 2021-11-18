import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-header',
  host: { class: 'background-theme' },
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  notification = true;
  photo: any;
  sitename: string = localStorage.getItem('site_name') || '';
  show: boolean = false;
  
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
