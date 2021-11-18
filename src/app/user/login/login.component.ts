import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {    
    if (this.formGroup.valid) {
      this.loading = true;
      this.authService.login(this.formGroup.value).subscribe(
        (result) => {
          if (result.success) {
            const url = localStorage.getItem('temp_url');
            localStorage.clear();
            // console.log(result.data.site.slug);
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('role', result.data.user.role);
            if (url) localStorage.setItem('url', url);
            if (result.data.user.role === 'Account Manager') {
              if (url) this.router.navigate([url]);
              else this.router.navigate(['../oak']);
            } else {
              localStorage.setItem('site_slug', result.data.site.slug);
              localStorage.setItem('site_name', result.data.site.name);
              if (url) this.router.navigate([url]);
              else this.router.navigate(['../oak']);
            }
          }
          this.loading = false;
        },
        (err) => {
          console.log(err);
          this.loading = false;
        }
      );
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
