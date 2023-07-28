import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighChartsDrilldownComponent } from './high-charts-drilldown/high-charts-drilldown.component';
import { HighChartsPieComponent } from './high-charts-pie/high-charts-pie.component';

@NgModule({
  declarations: [
    AppComponent,
    HighChartsDrilldownComponent,
    HighChartsPieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
