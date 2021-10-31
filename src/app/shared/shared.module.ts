import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import treemap from 'highcharts/modules/treemap.src';
import accessibility from 'highcharts/modules/accessibility.src';
import exportdata from 'highcharts/modules/export-data.src';
import stock from 'highcharts/modules/stock.src';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { LineColumnComponent } from './line-column/line-column.component';
import { LoaderModule } from '../loader/loader.module';
import { NotificationChartComponent } from './notification-chart/notification-chart.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TreeMapComponent } from './tree-map/tree-map.component';
import { MultiLineChartComponent } from './multi-line-chart/multi-line-chart.component';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [
    more,
    exporting,
    highmaps,
    solidgauge,
    accessibility,
    exportdata,
    stock,
    treemap
  ];
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
    LineColumnComponent,
    NotificationChartComponent,
    TreeMapComponent,
    MultiLineChartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgsAvaterModule,
    ChartModule,
    FormsModule,
    BsDatepickerModule,
    DatepickerModule,
    LoaderModule,
    BsDropdownModule.forRoot(),
    FontAwesomeModule
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
    LineColumnComponent,
    TreeMapComponent,
    MultiLineChartComponent
  ],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }],
})
export class SharedModule {}
