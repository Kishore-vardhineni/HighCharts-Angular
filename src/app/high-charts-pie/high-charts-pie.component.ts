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
  @ViewChild("container", { read: ElementRef })
  container!: ElementRef;
  @ViewChild("datatable", { read: ElementRef }) datatable!: ElementRef;
  private myVariable!: Highcharts.Chart;
  hideTableChartData: boolean = false;


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
        drilldown: function (e: Highcharts.DrilldownEventObject) {
            e.target.options.drilldown?.series?.forEach((x: any) => {
               if(x.name === e.seriesOptions?.name) {
                  console.log("filtered data", x.data, x.name)
               } else if(x.name === e.seriesOptions?.name) {
                 console.log("filtered 2", x.data, x.name)
               } else if(x.name === e.seriesOptions?.name){
                 console.log("filtered 3", x.data, x.name)
               }
            })
        },
        drillup: function () {
          // Handle drillup event
          // console.log(e);
        },
        //series: this.chatService.getPieSecondChartData(),
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

  loadTableOne(value: any) {
    console.log(value);
  }

  
}