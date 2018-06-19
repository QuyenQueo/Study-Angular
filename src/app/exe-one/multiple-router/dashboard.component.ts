import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
})

export class DashboardComponent implements OnInit {
    sectionButton: boolean;
    sectionList: boolean;
    sectionTypography: boolean;

    constructor(
        private router: Router,
    ) {}

    toggle(key: string) {
        switch (key) {
            case 'button':
                this.sectionButton = !this.sectionButton;
                break;
            case 'list':
                this.sectionList = !this.sectionList;
                break;
            case 'typography':
                this.sectionTypography = !this.sectionTypography;
                break;
        }

        this.setDashboard();
    }

    setDashboard() {
        const params: string[] = [];
        if (this.sectionButton) {
            params.push('widget-button:widget-button');
        }
        if (this.sectionList) {
            params.push('widget-list:widget-list');
        }
        if (this.sectionTypography) {
            params.push('widget-typography:widget-typography');
        }
        let urlFinal: string = '/dashboard';
        if (params.length > 0) {
            urlFinal += '(' + params.join('//') + ')';
        }
        this.router.navigateByUrl(urlFinal);
    }

    setClass(key: string) {
        let flag1, flag2, flag3;

        switch (key) {
            case 'button':
                flag1 = this.sectionButton;
                break;
            case 'list':
                flag2 = this.sectionList;
                break;
            case 'typography':
                flag3 = this.sectionTypography;
                break;
        }

        return {
            'btn': true,
            'btn-danger': flag1,
            'btn-warning': flag2,
            'btn-success': flag3,
        };
    }

    ngOnInit() {
        this.sectionButton = false;
        this.sectionList = false;
        this.sectionTypography = false;
    }
}
