import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { matchPassword } from 'src/app/shared/functions/validators.functions';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({
    newpassword: new FormControl('', [Validators.minLength(8), Validators.maxLength(20), Validators.required, matchPassword]),
    confirmpassword: new FormControl('', [matchPassword, Validators.required])
  })
  loading: boolean = false;
  token: string = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    route.queryParams.subscribe(params => {
      if(!params.token || !localStorage.getItem('email')) this.router.navigate(['/login']);
      this.token = params.token;
    })
  }

  ngOnInit(): void { }

  resetPassword() {
    if (this.form.valid) {
      this.loading = true;
      this.authService.resetPassword({
        password: this.form.value.newpassword,
        password_confirmation: this.form.value.confirmpassword,
        token: this.token
      }).subscribe(response => {
        console.log(response);
        localStorage.removeItem('email');
        this.openSnackBar("Password reset successfully", 'Dismiss');
        this.loading = false;
        this.router.navigate(['/login']);
      }, err => {
        this.openSnackBar("Some error occurred", 'Dismiss');
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
