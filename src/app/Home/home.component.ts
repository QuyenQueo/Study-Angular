import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})

export class HomeComponent {
    message = 'Cái này từ thằng cha truyền cho thằng con';
    colorText = 'black';

    toggle($event) {
        console.log('component cha', $event);
    }

    onClick() {
        this.colorText = "black";
    }

    eventChangeColora($event) {
        this.colorText = $event;
    }
}
