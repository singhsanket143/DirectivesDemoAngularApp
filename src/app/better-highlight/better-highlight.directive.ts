import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'lime';
  @Input('appBetterHighlight') highlightColor = 'lime';
  @HostBinding('style.backgroundColor') backgroundColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'aqua');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'aqua');
    // this.backgroundColor = 'aqua';
    this.backgroundColor  = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'lime');
    // this.backgroundColor = 'lime';
    this.backgroundColor = this.defaultColor;
  }

}
