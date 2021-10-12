import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';
import { ChartModule } from 'angular-highcharts';
import { WeatherComponent } from './home/weather/weather.component';
import { GoogleNewsComponent } from './home/google-news/google-news.component';
import { MatSelectModule } from '@angular/material/select';
import { LoaderModule } from '../loader/loader.module';
import { BasicInsightsComponent } from './basic-insights/basic-insights.component';
import { DeepInsightsComponent } from './deep-insights/deep-insights.component';
import { MultiSiteComparisonComponent } from './multi-site-comparison/multi-site-comparison.component';
import { PhaseDistributionComponent } from './phase-distribution/phase-distribution.component';
import { ApplianceComparisonComponent } from './appliance-comparison/appliance-comparison.component';
import { SavingsCalculatorComponent } from './savings-calculator/savings-calculator.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

@NgModule({
  declarations: [
    HomeComponent,
    WeatherComponent,
    GoogleNewsComponent,
    BasicInsightsComponent,
    DeepInsightsComponent,
    MultiSiteComparisonComponent,
    PhaseDistributionComponent,
    ApplianceComparisonComponent,
    SavingsCalculatorComponent,
    RecommendationsComponent,
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
    FormsModule,
    LoaderModule
  ]
})
export class PagesModule { }
