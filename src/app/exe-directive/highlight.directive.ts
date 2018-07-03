import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[myhighlight]',
})
export class HighlightDirective {
    constructor(private el: ElementRef, private renderer: Renderer ) {
        this.highlight('green');
    }

    @HostListener('mouseenter') onmouseenter() {
        this.highlight('black');
    }

    @HostListener('mouseover') onmouseover() {
        this.highlight(null);
    }

    @HostListener('click', ['$event']) onClick(btn) {
        console.log(btn);
    }

    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}
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
