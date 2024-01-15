import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[directive1Test]',
})
export class Directive1Directive {
  @Input() color: string = 'pink';
  @Output() outputTest = new EventEmitter<any>(false);

  @HostListener('window:click') onClick() {
    this.setBackgroundColor(this.color);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor('blue');
    this.outputTest.emit('test myoutput');
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor('purple');
  }

  /*Puedo tener acceso a todo lo que tiene un div*/
  constructor(public element: ElementRef) {
    this.setBackgroundColor(this.color);
    this.element.nativeElement.style.border = '10px black solid';
  }

  setBackgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
