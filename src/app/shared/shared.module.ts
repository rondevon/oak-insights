import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgsAvaterModule } from 'ngs-avater';
import { RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { HeatMapComponent } from './heatmap/heatmap.component';
import { ActivityGaugeComponent } from './activity-gauge/activity-gauge.component';
import { ApplianceConsumptionComponent } from './appliance-consumption/appliance-consumption.component';
import { InsightItemTileComponent } from './insight-item-tile/insight-item-tile.component';

import { HIGHCHARTS_MODULES, ChartModule } from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';
import exporting from 'highcharts/modules/exporting.src';
import highmaps from 'highcharts/modules/map.src';
import solidgauge from 'highcharts/modules/solid-gauge.src';
import accessibility from 'highcharts/modules/accessibility.src';
import exportdata from 'highcharts/modules/export-data.src';
import { YearlyUsagePredictionComponent } from './yearly-usage-prediction/yearly-usage-prediction.component';

export function highchartsModules() { 
  // apply Highcharts Modules to this array
  return [ more, exporting, highmaps,solidgauge,accessibility,exportdata];
}

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ChartComponent,
    StackedBarChartComponent,
    HeatMapComponent,
    ActivityGaugeComponent,
    ApplianceConsumptionComponent,
    InsightItemTileComponent,
    YearlyUsagePredictionComponent
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
    HeatMapComponent,
    ActivityGaugeComponent,
    ApplianceConsumptionComponent,
    InsightItemTileComponent,
    YearlyUsagePredictionComponent
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }
  ]
})
export class SharedModule { }
