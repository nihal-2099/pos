import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardsComponent } from './cards/cards.component';
import { SharedModule } from '../../shared/shared.module';

import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsComponent } from './charts/charts.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HighchartsChartModule
  ]
})
export class DashboardModule { }
