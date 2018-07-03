import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-highlight',
    templateUrl: './highlight.component.html',
})
export class HighlightComponent implements OnInit {
    color = 'red';
    constructor() { }

    ngOnInit(): void { }
}
