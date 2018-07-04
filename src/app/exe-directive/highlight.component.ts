import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive-highlight',
    templateUrl: './highlight.component.html',
})
export class HighlightComponent implements OnInit {
    hocsinh = [
        'hocsinh1', 'hocsinh2', 'hocsinh3', 'hocsinh4', 'hocsinh5'
    ];
    constructor() { }

    ngOnInit(): void { }
}
