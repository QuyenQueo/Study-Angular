import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-control',
    template: `
        <div class="card">
            <div class="card-header bg-primary text-white">ControlComponent</div>
            <div class="card-body">
                <p [ngStyle]="{'color': childcolorText}">Bạn Vừng rất của bố Híu mẹ Quyn</p>
                <button type="button" (click)="onClick('red')" class="btn btn-danger">Red</button>
                <button type="button" (click)="onClick('green')" class="btn btn-success">Green</button>
                <button type="button" (click)="onClick('blue')" class="btn btn-info">Blue</button>
            </div>
        </div>`,
})
export class ControlComponent implements OnInit {
    @Input() childcolorText;
    @Output() eventChangeColor = new EventEmitter();

    constructor() { }

    onClick(value) {
        this.eventChangeColor.emit(value);
    }

    ngOnInit(): void {
    }
}
