import { Component } from '@angular/core';

interface Hocsinh {
	name: string,
	age: number,
	type: string,
}
let Quyen: Hocsinh = {
	name: "Nguyen Quyen",
	age: 29,
	type: "Hoc sinh xuất sắc",
};

let printInfo: any = (Quyen: Hocsinh) => {
	console.log("Thông tin học sinh Quyên:");
	if (Quyen.name === undefined) {
		console.log('Khong lay duoc thong tin');
	} else {
		console.log('Tên: ' + Quyen.name + ' Tuổi: ' + Quyen.age + ' Xếp loại: ' + Quyen.type);
	}
}
printInfo(Quyen);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	constructor() {}
}
