import { Component, OnInit } from '@angular/core';
import { IProfile } from '../template-driven/profile.interface';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validators as QValidators } from './validators/validators.class';

@Component({
    selector: 'app-data-driven',
    templateUrl: 'data-driven.component.html',
})

export class DataDrivenComponent implements OnInit {
    profile: IProfile;
    formProfile = this._formBuilder.group({
        'username': ['', [
            Validators.required,
            Validators.minLength(5),
        ]],
        'email': ['', [
            Validators.required,
            QValidators.emailValid,
        ]],
        'facebook': ['',  Validators.required],
        'website':  ['',  Validators.required],
    });
    constructor(
        private _formBuilder: FormBuilder
    ) {}

    onSubmit(value) {
        if (value.dirty && value.valid) {
            this.profile = {
                'username': value.username,
                'email': value.email,
                'facebook': value.facebook,
                'website': value.website,
            };
        }
    }

    onResetForm(value) {
        value.reset();
    }

    onBindData() {
        this.formProfile.setValue({
            'username': 'Flower',
            'email': 'vung@gmail.com',
            'facebook': 'Vừng',
            'website': 'vung.com',
        });
    }

    private setInfoProfile(username: string, email: string, facebook: string, website: string) {
        this.profile = {
            'username': username,
            'email': email,
            'facebook': facebook,
            'website': website,
        };
    }

    ngOnInit() {
        this.setInfoProfile('Quyen Nguyen', 'quyen@gmail.com', 'Quyen Facebook', 'Quyen Website');
        // this.formProfile.valueChanges.subscribe(
        //     (value) => console.log(value),
        // );
        console.log('khong co gi', this.formProfile.controls.email);
    }
}
