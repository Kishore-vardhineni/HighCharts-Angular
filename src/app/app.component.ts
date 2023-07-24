import { Component, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
import { HighChartsDrilldownComponent } from './high-charts-drilldown/high-charts-drilldown.component';
Drilldown(Highcharts);
import { HighchartService } from '../app/highchart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-highcharts';
  firstChartHide: boolean = true;
  secondChartHide: boolean = true;
  backDrillDown: boolean = false;

  @ViewChild(HighChartsDrilldownComponent) HighChartsDrilldownComponent: any;

  constructor(private chatservice: HighchartService) {}

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      events: {
        drilldown: function (e) {
          // Handle drilldown event
        },
        drillup: function (e) {
          // Handle drillup event
        },
      },
    },
    title: {
      align: 'left',
      text: 'Browser market shares. January, 2022'
    },
    subtitle: {
      align: 'left',
      text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
    xAxis: {
      type: 'category',
      title: {
        text: 'Browser market share values 2022'
      }
    },
    yAxis: {
      title: {
        text: 'Total percent market share 2022'
      }
    },
    legend: {
      enabled: false
    },

    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:1f}%'
        }
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    series: this.chatservice.getChartData1(),
    drilldown: {
      breadcrumbs: {
        position: {
          align: 'right',
        }
      },
      series: this.chatservice.getChartData2(),
      //series: this.chatservice.getChartOneDrillDown()
    }
  }

  firstChartInfo = () => {
     this.firstChartHide = ! this.firstChartHide;
     this.backDrillDown = true;
  }

  // onchange(value: any){
  //   this.secondChartHide = value;
  // }

  chartToggle() {
    this.secondChartHide = this.HighChartsDrilldownComponent.secondChartHide;
  }

  backToDrillDown() {
    this.backDrillDown = false;
    this.firstChartHide = true;
  }
  
}
