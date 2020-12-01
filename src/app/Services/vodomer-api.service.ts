import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface ICold {
  cold : number
}
interface IHot {
  hot : number
}
@Injectable({
  providedIn: 'root'
})
export class VodomerApiService {
  private baseUrl: string = 'http://raspberry.pi/api/'
  constructor(private http: HttpClient) {
  }

  getCold = ():Observable<ICold> => this.http.get<ICold>(`${this.baseUrl}water/cold`);
  getHot = ():Observable<IHot> => this.http.get<IHot>(`${this.baseUrl}water/hot`);
   
}
