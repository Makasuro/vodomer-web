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
  loading: boolean = false;
  constructor(private api:VodomerApiService) { }

  ngOnInit(): void {
    this.loading = true;
    combineLatest(this.api.getCold(),this.api.getHot()).subscribe(x=>{
      this.loading = false;
      this.cold = x[0].cold;
      this.hot = x[1].hot
    })
  }

}
