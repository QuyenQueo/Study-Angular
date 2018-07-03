import { Component, Input } from '@angular/core';
// import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})

export class HomeComponent {
    message = 'Cái này từ thằng cha truyền cho thằng con';
    student: any = {
        userName: 'Quyen',
    };
    colorText = 'black';

    constructor(
    ) {}

    save() {
        // this.homeService.addStudent().subscrible(
        //     (res) => {
        //         console.log(res);
        //     }
        // );
    }

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
