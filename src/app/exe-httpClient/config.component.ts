import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from './config.model';

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

    ngOnInit(): void {
        this.showConfig();
        this.showConfigResponse();
    }
}
