import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-previewer',
    template: `
        <div class="card">
            <div class="card-header bg-primary text-white">PreviewerComponent</div>
            <div class="card-body">
                <p [ngStyle]="{'color': childcolorText}">Bạn Vừng rất xinh gái <3</p>
            </div>
        </div>
    `,
})
export class PreviewerComponent implements OnInit {
    @Input() childcolorText;
    constructor() { }

    ngOnInit(): void { }
}
