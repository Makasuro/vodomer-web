import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'vodomer-web';

  constructor(){
    

    //api.getCold().subscribe(x=> this.cold = x.cold);
    //api.getHot().subscribe(x=> this.hot = x.hot);
  }
}
