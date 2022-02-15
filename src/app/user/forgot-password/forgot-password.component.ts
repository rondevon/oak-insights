import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { matchPassword } from 'src/app/shared/functions/validators.functions';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required])
  })
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {}

  forgotPassword() {
    if (this.form.valid) {
      this.loading = true;
      this.authService.forgot(this.form.value.email).subscribe(()=>{
        this.openSnackBar("Please check your mail", 'Dismiss');
        this.loading = false;
        localStorage.setItem('email', this.form.value.email)
      }, err => {
        this.openSnackBar("Internal Error", 'Dismiss');
        this.loading = false;
      })
    } else {
      this.form.markAllAsTouched();
    }
  }

  openSnackBar(message: string, action: string = 'Cancel') {
    this._snackBar.open(message, action, { duration: 3000 });
  }
}
