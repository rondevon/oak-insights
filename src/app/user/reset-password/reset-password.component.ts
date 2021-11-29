import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  login() {
    if (this.form.valid) {
      this.loading = true;
      this.openSnackBar("Password reset successfully", 'Dismiss');
      this.loading = false;
    } else {
      this.form.markAllAsTouched();
    }
  }

  openSnackBar(message: string, action: string = 'Cancel') {
    this._snackBar.open(message, action, { duration: 3000 });
  }
}
