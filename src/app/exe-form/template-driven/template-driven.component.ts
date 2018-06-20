import { Component, OnInit } from '@angular/core';
import { IProfile } from './profile.interface';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-template-driven',
    templateUrl: 'template-driven.component.html',
})

export class TemplateDrivenComponent implements OnInit {
    profile: IProfile = null;
    resultProfile = {
        username: 'username',
        email: 'email',
        facebook: 'facebook',
        website: 'website',
    };

    constructor(
    ) {}

    private setProfileData(username: string, email: string, website: string, facebook: string) {
        this.profile = {
            username: username,
            email: email,
            facebook: facebook,
            website: website,
        };
    }

    onResetForm(formProfile: NgForm) {
        formProfile.reset();
    }

    onSubmit(value: any) {
        this.resultProfile = value;
    }

    ngOnInit() {
        this.setProfileData('', '', '', '');
    }
}
