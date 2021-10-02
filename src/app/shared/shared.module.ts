import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgsAvaterModule } from 'ngs-avater';
import { RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';

import { HIGHCHARTS_MODULES, ChartModule } from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';
import exporting from 'highcharts/modules/exporting.src';
import highmaps from 'highcharts/modules/map.src';
import { HeatMapComponent } from './heatmap/heatmap.component';

export function highchartsModules() { 
  // apply Highcharts Modules to this array
  return [ more, exporting, highmaps];
}

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ChartComponent,
    StackedBarChartComponent,
    HeatMapComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    NgsAvaterModule,
    ChartModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ChartComponent,
    StackedBarChartComponent,
    HeatMapComponent
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }
  ]
})
export class SharedModule { }
