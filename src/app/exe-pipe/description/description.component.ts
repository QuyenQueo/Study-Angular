import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-description',
    templateUrl: './description.component.html',
})
export class DescriptionComponent implements OnInit {
    description = "bé vừng tên thật là Nguyễn Ánh Dương :D";

    constructor() { }

    ngOnInit(): void { }
}
