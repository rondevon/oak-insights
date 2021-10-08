import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from "@angular/material/card";
import { HomeComponent } from './home/home.component';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';
import { ChartModule } from 'angular-highcharts';
import { WeatherComponent } from './weather/weather.component';
import { GoogleNewsComponent } from './google-news/google-news.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    HomeComponent,
    WeatherComponent,
    GoogleNewsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CustomPipesModule,
    MatGridListModule,
    MatCardModule,
    ChartModule,
    SharedModule,
    MatSelectModule,
    FormsModule
  ]
})
export class PagesModule { }
