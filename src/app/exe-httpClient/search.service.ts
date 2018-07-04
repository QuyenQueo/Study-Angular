import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Config } from './config.model';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable()
export class PackageSearchService {
    configUrl = 'http://5a8d3d92d6c8840012dde9c5.mockapi.io/Angular/student-test';

    constructor(private http: HttpClient) { }

    searchHeroes(term: string): Observable<Config[]> {
        term = term.trim();
        const options = term ? {
            params: new HttpParams().set('name', term)
        } : {};

        return this.http.get<Config[]>(this.configUrl, options);
    }
}
