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

  private pieFirstChartData: any[] = [
    {
      name: 'days',
      colorByPoint: true,
      data: [
        {
          name: '0-3 days',
          y: 84.8,
          drilldown: '0-3 days'
        },
        {
          name: '3-10 days',
          y: 1.6,
          drilldown: 'Safari'
        },
        {
          name: '>10 days',
          y: 13.6,
          drilldown: 'Edge'
        },
      ]
    }
  ]

  private pieSecondChartData: any[] = [
    {
      name: '0-3 days',
      id: '0-3 days',
      data: 
        `<table>
  <thead>
      <tr>
          <th>0-3 Days</th>
          <th>Year</th>
          <th>Quater1</th>
          <th>Sales</th>
          <th>Quater2</th>
          <th>Sales</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>2</td>
          <td>2022</td>
          <td>March_Sept</td>
          <td>50%</td>
          <td>Sept-March</td>
          <td>60%</td>
      </tr>
      <tr>
          <td>3</td>
          <td>2021</td>
          <td>March_Sept</td>
          <td>70%</td>
          <td>Sept-March</td>
          <td>75%</td>
      </tr>
  </tbody>
</table>`
    },
    {
      name: '3-10 days',
      id: '3-10 days',
      // data: [
      //   [
      //     'v15.3',
      //     0.1
      //   ],
      //   [
      //     'v15.2',
      //     2.01
      //   ],
      //   [
      //     'v15.1',
      //     2.29
      //   ],
      //   [
      //     'v15.0',
      //     0.49
      //   ],
      //   [
      //     'v14.1',
      //     2.48
      //   ],
      //   [
      //     'v14.0',
      //     0.64
      //   ],
      //   [
      //     'v13.1',
      //     1.17
      //   ],
      //   [
      //     'v13.0',
      //     0.13
      //   ],
      //   [
      //     'v12.1',
      //     0.16
      //   ]
      // ]
      data: []
    },
    {
      name: 'Edge',
      id: 'Edge',
      // data: [
      //   [
      //     'v97',
      //     6.62
      //   ],
      //   [
      //     'v96',
      //     2.55
      //   ],
      //   [
      //     'v95',
      //     0.15
      //   ]
      // ]
      data: []
    },
  ]

//   private pieTableChartData = [`<table>
//   <thead>
//       <tr>
//           <th>0-3 Days</th>
//           <th>Year</th>
//           <th>Quater1</th>
//           <th>Sales</th>
//           <th>Quater2</th>
//           <th>Sales</th>
//       </tr>
//   </thead>
//   <tbody>
//       <tr>
//           <td>2</td>
//           <td>2022</td>
//           <td>March_Sept</td>
//           <td>50%</td>
//           <td>Sept-March</td>
//           <td>60%</td>
//       </tr>
//       <tr>
//           <td>3</td>
//           <td>2021</td>
//           <td>March_Sept</td>
//           <td>70%</td>
//           <td>Sept-March</td>
//           <td>75%</td>
//       </tr>
//   </tbody>
// </table>`
//   ] 

  setChartData1(data: any): void {
    this.firstChartData = data;
  }

  getChartData1(): any[] {
    return this.firstChartData;
  }

  setChartData2(data: any): void {
    this.secondChartData = data;
  }

  getChartData2(): any[] {
    return this.secondChartData;
  }

  setPieFirstChartData(data: any): void {
    this.pieFirstChartData = data;
  }

  getPieFirstChartData(): any[] {
    return this.pieFirstChartData;
  }

  setPieSecondChartData(data: any): void {
    this.pieSecondChartData = data;
  }

  getPieSecondChartData(): any[] {
    return this.pieSecondChartData;
  }

  // setPieTableChartData(data: any): void {
  //   this.pieTableChartData = data;
  // }

  // getPieTableChartData(): any[] {
  //   return this.pieTableChartData;
  // }

}
