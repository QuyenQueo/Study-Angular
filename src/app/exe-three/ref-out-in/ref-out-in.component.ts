import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ref-out-in',
  templateUrl: 'ref-out-in.component.html',
})

export class RefOutInComponent implements OnInit, OnDestroy {
    @Input() rmessage;
    @Output()
        answer: EventEmitter<any> = new EventEmitter();
        answerRequest: EventEmitter<any> = new EventEmitter();

    constructor() {}

    stoggle(value: number) {
        this.answer.emit(value);
    }

    onClick(value: number) {
        this.answerRequest.emit(value);
    }

    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
