import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

declare let Prism: any;

@Directive({
  selector: '[prism-highlight]'
})
export class PrismHighlightDirective implements AfterViewInit {
  @Input('prism-highlight') prismHighlight;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.innerHTML = Prism.highlight(this.el.nativeElement.textContent, Prism.languages[this.prismHighlight]);
  }
}
