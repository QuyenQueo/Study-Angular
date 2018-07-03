import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
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
    configUrl = 'http://5a8d3d92d6c8840012dde9c5.mockapi.io/Angular/student-test';

    constructor(private http: HttpClient) { }

    addConfig(student: Config): Observable<Config> {
        // return this.http.post(Config)(this.configUrl, student, httpOptions).pipe(
        //     catchError(this.handleError('addHero', hero))
        // );
        return this.http.post<Config>(this.configUrl, student, httpOptions);
    }

    getConfig() {
        return this.http.get<Config>(this.configUrl);
    }

    getConfigResponse(): Observable<HttpResponse<Config>> {
        return this.http.get<Config>(
            this.configUrl, {observe: 'response'},
        );
    }
}
