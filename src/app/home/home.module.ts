import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from "@angular/material/card";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    MatCardModule,
  ]
})
export class HomeModule { }
