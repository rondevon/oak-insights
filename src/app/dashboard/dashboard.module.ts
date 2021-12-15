import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';
import { NgsAvaterModule } from 'ngs-avater';
import { LoaderModule } from '../loader/loader.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    DashboardComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    CustomPipesModule,
    NgsAvaterModule,
    LoaderModule,
    MatTooltipModule,
    MatButtonModule,
MatSelectModule
  ]
})
export class DashboardModule { }
