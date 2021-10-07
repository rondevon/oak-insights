import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-header',
  host: { class: 'background-theme' },
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  notification = true;
  photo: any;
  constructor(private authService: AuthService, private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMyprofileApi().subscribe((data: any)=> {
      this.photo= data.data.photo;
    });
  }

  logout() {
    this.authService.logout().subscribe((result) => {
      if (result.success) {
        localStorage.clear();
        this.router.navigate(['/user/login']);
      }
    });
  }
}
