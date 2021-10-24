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
import { PredictiveRangeChartComponent } from './predictive-range-chart/predictive-range-chart.component';
import { StockGraphComponent } from './stock-graph/stock-graph.component';
import { LoadCurveComponent } from './load-curve/load-curve.component';
import { MinMaxComponent } from './min-max/min-max.component';
import { MonthsDataComponent } from './months-data/months-data.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';

import { HIGHCHARTS_MODULES, ChartModule } from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';
import exporting from 'highcharts/modules/exporting.src';
import highmaps from 'highcharts/modules/map.src';
import solidgauge from 'highcharts/modules/solid-gauge.src';
import accessibility from 'highcharts/modules/accessibility.src';
import exportdata from 'highcharts/modules/export-data.src';
import stock from 'highcharts/modules/stock.src';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { LineColumnComponent } from './line-column/line-column.component';


export function highchartsModules() { 
  // apply Highcharts Modules to this array
  return [ more, exporting, highmaps, solidgauge, accessibility, exportdata, stock];
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
    PredictiveRangeChartComponent,
    StockGraphComponent,
    LoadCurveComponent,
    MinMaxComponent,
    MonthsDataComponent,
    DonutChartComponent,
    LineColumnComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    NgsAvaterModule,
    ChartModule,
    FormsModule,
    BsDatepickerModule,
    DatepickerModule

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
    PredictiveRangeChartComponent,
    StockGraphComponent,
    LoadCurveComponent,
    MinMaxComponent,
    MonthsDataComponent,
    DonutChartComponent,
    LineColumnComponent
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }
  ]
})
export class SharedModule { }
