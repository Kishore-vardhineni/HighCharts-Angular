import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
import { HighchartService } from '../highchart.service';
Drilldown(Highcharts);

@Component({
  selector: 'app-high-charts-drilldown',
  templateUrl: './high-charts-drilldown.component.html',
  styleUrls: ['./high-charts-drilldown.component.scss']
})
export class HighChartsDrilldownComponent {

  @Input() firstChartHide: any;
  @Input() firstChartData: any;
  secondChartHide: boolean = true;
  @Output() public arrowIndicator = new EventEmitter<any>();
  backSecondDrillDown: boolean = false;

  constructor(public chartService: HighchartService) {}

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      align: 'left',
      text: 'Browser market shares. July, 2023'
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
        text: 'Browser market share values 2023'
      }
    },
    yAxis: {
      title: {
        text: 'Total percent market share 2023'
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
    series: this.chartService.getChartData1(),
    drilldown: {
      breadcrumbs: {
        position: {
          align: 'right',
        }
      },
      series: this.chartService.getChartData2()
    }
  }

  secondChartInfo = () => {
    this.secondChartHide = !this.secondChartHide;
    this.backSecondDrillDown = true;
   // this.arrowIndicator.emit(this.secondChartHide);
  }

  backToSecondDrillDown() {
    this.backSecondDrillDown = false;
    this.secondChartHide = true;
    
  }
}

