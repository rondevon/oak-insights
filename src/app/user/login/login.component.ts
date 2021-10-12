import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  formGroup: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  login() {
    if(this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(result => {
        if(result.success) {
          // console.log(result.data.token);
          localStorage.setItem('token', result.data.token)
          this.router.navigate(['../oak']);
        }
      }, err => {
        console.log(err);
      })
    }
  }
  

}
