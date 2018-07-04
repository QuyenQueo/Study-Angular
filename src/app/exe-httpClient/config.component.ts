import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from './config.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Component({
    selector: 'app-config-name',
    templateUrl: './config.component.html',
})
export class ConfigComponent implements OnInit {
    config1: Config;
    config2: Config;
    student: any = {};
    error: any;
    headers: any;
    withRefresh = false;
    // packages$: Observable<NpmPackageInfo[]>;
    private searchText$ = new Subject<string>();

    constructor(
        private configService: ConfigService,
    ) { }

    showConfig() {
        this.configService.getConfig()
        .subscribe(
            (data: Config) => {
                // this.config = {
                //     heroesUrl: data['heroesUrl'],    v.1
                //     textfile: data['textfile'],
                // };
                // this.config = { ...data };
                this.config1 = data;
                console.log('day la config 1', this.config1);
            },
            error => this.error = error,
        );
    }

    showConfigResponse() {
        this.configService.getConfigResponse().subscribe(
            resp => {
                // const keys = resp.headers.keys();
                // this.headers = keys.map(
                //     key => `${key}: ${resp.headers.get(key)}`
                // );
                this.config2 = { ...resp.body };
                console.log('day la resp', resp);
            }
        );
    }

    save(value) {
        this.configService.addConfig(value).subscribe(
            (res) => {
                console.log('gia tri', res);
            },
            err => console.log(err),
        );
    }

    search(packageName: string) {
        this.searchText$.next(packageName);
    }

    ngOnInit(): void {
        // this.packages$ = this.searchText$.pipe(
        //     debounceTime(500),
        //     distinctUntilChanged(),
        //     switchMap(packageName =>
        //     this.searchService.search(packageName, this.withRefresh))
        // );
        this.showConfig();
        this.showConfigResponse();
    }
}
