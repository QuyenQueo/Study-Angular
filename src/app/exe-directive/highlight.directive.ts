import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHightlightDirective]',
})
export class Highlight2Directive {
    constructor( private el: ElementRef) {
    }

    @Input() appHightlightDirective: string;

    @HostListener('mouseenter') mouseEnter() {
        this.highlight(this.appHightlightDirective);
    }

    @HostListener('mouseleave') mouseLeave() {
        this.highlight(null);
    }

    @HostListener('click', ['$event']) onclick(btn) {
        console.log('click vao', btn.type);
    }

    private highlight(color) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
