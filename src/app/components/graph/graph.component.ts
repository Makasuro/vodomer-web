import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import * as moment from 'moment';
import { Color, Label } from 'ng2-charts';
import { map } from 'rxjs/operators';
import { IHistoryData, VodomerApiService } from 'src/app/Services/vodomer-api.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  data:IHistoryData[];
  
  lineChartData: ChartDataSets[] = [];
 
  /* = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];
  */

  lineChartLabels: Label[] = [];
  // = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
    {
      borderColor: 'red',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor(private api:VodomerApiService) { }

  ngOnInit(): void {
    this.api.getHistory()
    .subscribe(x=> {
      //this.data = x;
      var count = 0;
      this.lineChartData = [];
      this.lineChartData.push({data:x.map(z=> z.rateCold),label:'Расход холодной воды'});
      this.lineChartData.push({data:x.map(z=> z.rateHot),label:'Расход горячей воды'});
      this.lineChartLabels = (x.map(z=>(moment(z.date)).format('MMMM y')));
      console.log(this.lineChartData);

      console.log( this.lineChartLabels);
    });
  }

}
