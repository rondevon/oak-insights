import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from "@angular/material/card";
import { InsightItemTileComponent } from './insight-item-tile/insight-item-tile.component';
import { HomeComponent } from './home/home.component';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';

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
  ]
})
export class HomeModule { }
