import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';
import { NgsAvaterModule } from 'ngs-avater';
import { LoaderModule } from '../loader/loader.module';


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
    LoaderModule
  ]
})
export class DashboardModule { }
