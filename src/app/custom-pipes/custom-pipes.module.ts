import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateSuffix, DateSuffixFull } from './date-suffix.pipe';



@NgModule({
  declarations: [
    DateSuffix, DateSuffixFull
  ],
  imports: [
    CommonModule
  ],
  exports: [DateSuffix, DateSuffixFull]
})
export class CustomPipesModule { }
