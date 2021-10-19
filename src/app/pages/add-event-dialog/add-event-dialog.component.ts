import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss'],
})
export class AddEventDialogComponent implements OnInit {
  form: FormGroup = new FormGroup({
    date: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {}

  constructor(public dialogRef: MatDialogRef<AddEventDialogComponent>) {}

  onSubmitClick(): void {
    console.log(this.form.value);
    if (this.form.valid)
    this.dialogRef.close(this.form.value);
    else this.form.markAllAsTouched()
  }
}
