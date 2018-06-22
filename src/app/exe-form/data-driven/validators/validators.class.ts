import { FormControl } from '@angular/forms';

export class Validators {
    static emailValid(formProfile: FormControl) {
        const value1: any = (formProfile.value != null) ? formProfile.value : '';
        const pattern: any = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
        if (value1.match(pattern)) {
            return null;
        } else {
            return { 'invalidEmail': true };
        }
    }
}
