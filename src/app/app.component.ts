import { Component, OnInit } from '@angular/core';

// import { LoginService } from './services/login.service';

// let bien: string|number = 12;
// interface Hocsinh {
// 	name: string,
// 	age: number,
// 	type: string,
// }
// let quyen: Hocsinh = {
// 	name: "Nguyen Quyen",
// 	age: 29,
// 	type: "Hoc sinh xuất sắc",
// };

// let printInfo: any = (Quyen: Hocsinh) => {
// 	console.log("Thông tin học sinh Quyên:");
// 	if (Quyen.name === undefined) {
// 		console.log('Khong lay duoc thong tin');
// 	} else {
// 		console.log('Tên: ' + Quyen.name + ' Tuổi: ' + Quyen.age + ' Xếp loại: ' + Quyen.type);
// 	}
// }
// printInfo(quyen);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public isLogin: boolean;
    title = 'Title of heroes';

    constructor(
        // private loginService: LoginService
    ) {}

    ngOnInit() {
    }

    Logout() {
        // this.loginService.SetLogin(false);
        alert('Bạn đã Logout');
    }
}
