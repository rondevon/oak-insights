import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from "@angular/material/card";
import { InsightItemTileComponent } from './insight-item-tile/insight-item-tile.component';
import { HomeComponent } from './home/home.component';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';
import { ChartModule } from 'angular-highcharts';
import { WeatherComponent } from './weather/weather.component';
import { GoogleNewsComponent } from './google-news/google-news.component';
import { ApplianceConsumptionComponent } from './appliance-consumption/appliance-consumption.component';

@NgModule({
  declarations: [
    HomeComponent,
    InsightItemTileComponent,
    WeatherComponent,
    GoogleNewsComponent,
    ApplianceConsumptionComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CustomPipesModule,
    MatGridListModule,
    MatCardModule,
    ChartModule,
    SharedModule
  ]
})
export class PagesModule { }
