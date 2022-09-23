import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highstock";
import { IReportDataPayload } from 'src/app/core/models/IReportDataPayload';
import { CommonService } from 'src/app/core/services/common/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-garde-wise-resource',
  templateUrl: './garde-wise-resource.component.html',
  styleUrls: ['./garde-wise-resource.component.scss']
})
export class GardeWiseResourceComponent implements OnInit {
  filters: any;
  barChartOptions: Highcharts.Options | undefined;
  isReportLoading = false;
  config = {
    labelExpr: 'Grade',
    datasets: [
      { dataExpr: 'Total No of Plays (App and Portal)', label: 'Total No of Learning Session (App and Portal)' }
    ],
    options: {
      height: '700'
    }
  };
  data;

  constructor(private readonly _commonService: CommonService) {
    this.getBarData(this.filters);
  }

  ngOnInit(): void {
  }

  getBarData(filters: any): void {
    this.isReportLoading = true;
    let data: IReportDataPayload = {
      appName: environment.config.toLowerCase(),
      dataSourceName: 'foundation_literacy_numeracy',
      reportName: 'gradeWiseConsumption',
      reportType: 'barChart',
      stateCode: environment.stateCode,
      filters
    };

    this._commonService.getReportData(data).subscribe(res => {
      let result = res.result.data;
      this.filters = res.result.filters;
      this.config.options.height = (result.length * 15 + 150).toString();
      this.data = {
        values: result
      };
      
      this.isReportLoading = false;
    }, err => {
      this.isReportLoading = false;
    });
  }

  filtersUpdated(filters: any): void {
    this.getBarData(filters);
  }

  // getBarData() {
  //   this.options = {
  //     xAxis: {
  //       categories: ['Grade 1', 'Grade 2', 'Grade 3', 'Pre School 1', 'Pre School 2', 'Pre School 3', 'Multi Grade']
  //     },
  //     yAxis: {
  //       opposite: true
  //     },
  //     series: [
  //     {
  //       type: 'bar',
  //       color: "#DBADEC",
  //       name: 'Content count',
  //       data: [245, 75, 104, 85,768,104,205]

  //     }
  //      ]
  //   };
  //   }


}
