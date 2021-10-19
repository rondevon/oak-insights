import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { PhaseApplianceComponent } from './phase-distribution/phase-appliance/phase-appliance.component'; 
import { ApplianceComparisonComponent } from './appliance-comparison/appliance-comparison.component';
import { SavingsCalculatorComponent } from './savings-calculator/savings-calculator.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { AddEventDialogComponent } from './home/add-event-dialog/add-event-dialog.component';

import {MatDialogModule} from '@angular/material/dialog'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




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
    AddEventDialogComponent,
    PhaseApplianceComponent,
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
    LoaderModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class PagesModule { }
