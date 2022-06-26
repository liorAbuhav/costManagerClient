import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://localhost:8080/api/';

  constructor(public http: HttpClient) { }

  // GET requests
  getAllUsers(): Observable<any>{
    const url = this.apiUrl + 'users';
    return this.http.get<any>(url);
  }

  getAllCategories(): Observable<any>{
    const url = this.apiUrl + 'categories';
    return this.http.get<any>(url);
  }

  getCostsByUserId(userId: string): Observable<any>{
    const url = this.apiUrl + 'costs/user/' + userId;
    return this.http.get<any>(url);
  }

  getCostsByUserCategory(category: string): Observable<any>{
    const url = this.apiUrl + 'costs/category/' + category;
    return this.http.get<any>(url);
  }

  getCostsByDate(year: number | null | undefined, month: number | null | undefined): Observable<any>{
    const url = this.apiUrl + 'costs/date/' + year + '/' + month;
    return this.http.get<any>(url);
  }

  getCostsByUserAndDate(year: number | null | undefined, month: number | null | undefined, userId: string): Observable<any>{
    const url = this.apiUrl + 'costs/dateAndUser/' + userId + '/' + year + '/' + month;
    return this.http.get<any>(url);
  }

  // getExecutionsDataByMonitorId(monitorId: string): Observable<any> {
  //   const url = this.apiUrl + 'executor/' + monitorId;
  //   return this.http.get<any>(url);
  // }

  // //PUT requests
  // createMonitor(newMonitorData: any): Observable<any> {
  //   const url = this.apiUrl + 'monitor';
  //   return this.http.put<any>(url, newMonitorData)
  // }

  // // POST requests
  // executeMonitor(monitorId: string): Observable<any> {
  //   const url = this.apiUrl + 'executor/execute/' + monitorId;
  //   return this.http.post<any>(url, {});
  // }
}