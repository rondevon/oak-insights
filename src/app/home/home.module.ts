import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from "@angular/material/card";
import { InsightItemTileComponent } from './insight-item-tile/insight-item-tile.component';
import { HomeComponent } from './home/home.component';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    HomeComponent,
    InsightItemTileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomPipesModule,
    MatGridListModule,
    MatCardModule,
    ChartModule,
    SharedModule
  ]
})
export class HomeModule { }
