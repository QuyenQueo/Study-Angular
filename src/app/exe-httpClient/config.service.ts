import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Config } from './config.model';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
    })
};

@Injectable()
export class ConfigService {
    // configUrl = 'config.json';
    configUrl = 'https://api.github.com/';

    constructor(private http: HttpClient) { }

    addConfig(student: Config): Observable<HttpResponse<Config>> {
        // return this.http.post(Config)(this.configUrl, student, httpOptions).pipe(
        //     catchError(this.handleError('addHero', hero))
        // );
        return this.http.post<Config>(this.configUrl, student, {
            observe: 'response',
            responseType: 'json',
        });
    }

    getConfig() {
        return this.http.get<Config>(this.configUrl);
    }

    getConfigResponse(): Observable<HttpResponse<Config>> {
        return this.http.get<Config>(
            this.configUrl, {
                observe: 'response',
                responseType: 'json',
                params: new HttpParams().set('id', '1'),
            },
        );
    }
}
