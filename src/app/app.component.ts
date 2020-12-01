import { Component } from '@angular/core';
import { VodomerApiService } from './Services/vodomer-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'vodomer-web';
  cold:number;
  constructor(api:VodomerApiService){
    api.getCold().subscribe(x=> this.cold = x.cold);
  }
}
