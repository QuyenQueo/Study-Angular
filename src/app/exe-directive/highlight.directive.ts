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