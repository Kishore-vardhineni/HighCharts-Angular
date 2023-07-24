import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighchartService {

  constructor() { }

  private firstChartData: any[] = [
    {
      name: 'Browsers',
      colorByPoint: true,
      data: [
        {
          name: 'Chrome',
          y: 63.06,
          drilldown: 'Chrome'
        },
        {
          name: 'Safari',
          y: 19.84,
          drilldown: 'Safari'
        },
        {
          name: 'Firefox',
          y: 4.18,
          drilldown: 'Firefox'
        },
        {
          name: 'Edge',
          y: 4.12,
          drilldown: 'Edge'
        },
      ]
    }
  ]

  private secondChartData: any[] = [
    {
      name: 'Chrome',
      id: 'Chrome',
      data: [
        [
          'v65.0',
          0.1
        ],
        [
          'v64.0',
          1.3
        ],
        [
          'v63.0',
          53.02
        ],
        [
          'v62.0',
          1.4
        ],
        [
          'v61.0',
          0.88
        ],
        [
          'v60.0',
          0.56
        ]
      ]
    },
    {
      name: 'Firefox',
      id: 'Firefox',
      data: [
        [
          'v58.0',
          1.02
        ],
        [
          'v57.0',
          7.36
        ],
        [
          'v56.0',
          0.35
        ],
        [
          'v55.0',
          0.11
        ],
        [
          'v54.0',
          0.1
        ],
        [
          'v52.0',
          0.95
        ],
      ]
    },
    {
      name: 'Safari',
      id: 'Safari',
      data: [
        [
          'v11.0',
          3.39
        ],
        [
          'v10.1',
          0.96
        ],
        [
          'v10.0',
          0.36
        ],
        [
          'v9.1',
          0.54
        ],
        [
          'v9.0',
          0.13
        ],
        [
          'v5.1',
          0.2
        ]
      ]
    },
    {
      name: 'Edge',
      id: 'Edge',
      data: [
        [
          'v16',
          2.6
        ],
        [
          'v15',
          0.92
        ],
        [
          'v14',
          0.4
        ],
        [
          'v13',
          0.1
        ]
      ]
    },
  ]

  private backDrillDown: any[] = [
    {
      id: 'backButton',
      name: 'Back',
      colorByPoint: true,
      data: [{ name: '◁ Back', y: 0 }],
    },
    'category1' // Put the ID of the parent series here
  ] 

  setChartData1(data: any): void {
    this.firstChartData = data;
  }

  getChartData1(): any[] {
    return this.firstChartData;
  }

  setChartOneDrillDown(data: any): void {
    this.backDrillDown = data;
  }

  getChartOneDrillDown(): any[] {
    return this.backDrillDown;
  }

  setChartData2(data: any): void {
    this.secondChartData = data;
  }

  getChartData2(): any[] {
    return this.secondChartData;
  }

}
