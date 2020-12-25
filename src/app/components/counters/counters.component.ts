import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { VodomerApiService } from '../../Services/vodomer-api.service';
import { switchMap } from 'rxjs/operators';

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
  newCurrentHot = new FormControl(null, Validators.required);
  newCurrentCold = new FormControl(null, Validators.required);
  form:FormGroup;



  constructor(private api:VodomerApiService) { }

  ngOnInit(): void {
    this.form = new FormGroup({ newCurrentCold:this.newCurrentCold, newCurrentHot:this.newCurrentHot });
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
  public saveCurrentCounters = ()=>{
    var counts = {...this.form.value};
    console.log(counts);
    combineLatest(
      this.api.setCold(counts.newCurrentCold),
      this.api.setHot(counts.newCurrentHot),
    ).pipe(
      switchMap(x=> this.api.sendMail()),
      switchMap(x=> this.api.setLastCounters(counts.newCurrentHot, counts.newCurrentCold))
    )
    .subscribe(x=> {
      this.cold = counts.newCurrentCold;
      this.hot = counts.newCurrentHot;
      this.rateCold = this.cold - this.historyCold;
      this.rateHot = this.hot - this.historyHot;
    })
  }

}
