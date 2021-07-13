import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { IHightlight } from '../models/highlight.model';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input('appBetterHighlight') highlightOptions: IHightlight = {
    defaultColor: 'transparent',
    highlightColor: 'purple',
    highlightDuration: '.6s',
  };

  @HostBinding('style.backgroundColor') backgroundColor!: string;
  @HostBinding('style.transition') transition!: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    this.backgroundColor = this.highlightOptions.highlightColor;
    this.transition = this.highlightOptions.highlightDuration;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColor = this.highlightOptions.defaultColor;
    this.transition = this.highlightOptions.highlightDuration;
  }
}
