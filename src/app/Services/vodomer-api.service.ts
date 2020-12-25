import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface ICold {
  cold : number
}
interface IHot {
  hot : number
}
interface ILastCounters{
  cold: number,
  hot: number,
  date: Date
}
@Injectable({
  providedIn: 'root'
})
export class VodomerApiService {
  private baseUrl: string = 'http://raspberry.pi/api/'
  constructor(private http: HttpClient) {
  }
  sendMail = ():Observable<any> => this.http.post(`${this.baseUrl}mail`,{});
  getCold = ():Observable<ICold> => this.http.get<ICold>(`${this.baseUrl}water/cold`);
  setCold = (cold):Observable<any> => this.http.post(`${this.baseUrl}water/cold`,{cold});
  getHot = ():Observable<IHot> => this.http.get<IHot>(`${this.baseUrl}water/hot`);
  setHot = (hot):Observable<any> => this.http.post(`${this.baseUrl}water/hot`,{hot});
  getLastCounters = ():Observable<ILastCounters> => this.http.get<ILastCounters>(`${this.baseUrl}history/last`);
  setLastCounters = (hot,cold):Observable<any> => this.http.post(`${this.baseUrl}history/last`, {hot,cold});
   
}
