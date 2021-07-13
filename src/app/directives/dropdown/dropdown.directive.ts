import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    let dropdown = this.elementRef.nativeElement.children[1];
    dropdown.classList.toggle('show');
  }
}
