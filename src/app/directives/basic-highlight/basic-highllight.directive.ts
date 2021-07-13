import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  //   selector: 'appBasicHighlight',
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = 'purple';
  }
  ngOnInit() {}
}
