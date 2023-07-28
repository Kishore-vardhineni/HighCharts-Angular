import { Component, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartService } from '../highchart.service';

@Component({
  selector: 'app-high-charts-pie',
  templateUrl: './high-charts-pie.component.html',
  styleUrls: ['./high-charts-pie.component.scss']
})
export class HighChartsPieComponent {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  tableData1: boolean = false;
  tableData2: boolean = false;
  tableData3: boolean = false;

  chatData: any;

  constructor(private chatService: HighchartService,) {}


  Highcharts: typeof Highcharts = Highcharts;

  ngOnInIt() {
  
  }

  chartOptions: Highcharts.Options = ({
    data: {
      table: 'datatable'
    },
    chart: {
      plotBackgroundColor: '',
      plotBorderWidth: 0,
      plotShadow: false,
      type: 'pie',
      width: 500,
      height: 300,
      events: {
        drilldown: function (e) {
            e.target.options.drilldown?.series?.filter((x: any) => {
               console.log(x);
               if(x.name == '0-3 days') {
                  
               } else if(x.name == '3-10 days') {
                 
               } else {

               }
            })
        },
        drillup: function (e) {
          // Handle drillup event
        },
      },
    },
    title: {
      text: 'Browser market shares. January, 2022',
      align: 'left'
    },
    subtitle: {
      text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
      align: 'left'
    },
    accessibility: {
      announceNewData: {
        enabled: true
      },
      point: {
          valueSuffix: '%'
      }
    },
    plotOptions: {
       series: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage: .1f} %'
        }
       },
       pie: { 
        colors: ['#00008B', '#ADD8E6', '#ff0000']
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    series: this.chatService.getPieFirstChartData(),
    drilldown: {
      series: this.chatService.getPieSecondChartData()
    }
  })

  pieChartCondition(value: any) {
     console.log(value)
  }
}