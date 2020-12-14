import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { VodomerApiService } from '../../Services/vodomer-api.service';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {
  cold:number;
  hot:number;
  historyCold:number;
  historyHot:number;
  historyDate:string;
  rateCold:number;
  rateHot:number;
  loading: boolean = false;
  constructor(private api:VodomerApiService) { }

  ngOnInit(): void {
    this.loading = true;
    combineLatest(
      this.api.getCold(),
      this.api.getHot(),
      this.api.getLastCounters()
      ).subscribe(x=>{
      this.loading = false;
      this.cold = x[0].cold;
      this.hot = x[1].hot;
      this.historyCold = x[2].cold;
      this.historyHot = x[2].hot;
      this.historyDate = new Date(x[2].date).toLocaleDateString("ru-RU");
      this.rateCold = this.cold - this.historyCold;
      this.rateHot = this.hot - this.historyHot;
    })
  }

}
