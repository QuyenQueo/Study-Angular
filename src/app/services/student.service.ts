import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class StudentService {
  private apiUrl = "https://5a8d3d92d6c8840012dde9c5.mockapi.io/Angular/Student";

  constructor(private _http: Http) {}

  GetList(): Observable<any[]> {
    return this._http.get(this.apiUrl).map((response: Response) => response.json());
  }
  GetDetailStudent(id: number): Observable<any> {
    return this._http.get(this.apiUrl + '/' + id).map((response: Response) => response.json());
  }
  Update(id, data): Observable<any> {
    return this._http.put(this.apiUrl + '/' + id, data).map((response: Response) => response.json());
  } 
  Add(data): Observable<any> {
    return this._http.post(this.apiUrl, data).map((response: Response) => response.json());
  } 
  Delete(id): Observable<any> {
    return this._http.delete(this.apiUrl + '/' + id).map((response: Response) => response.json());
  } 
}