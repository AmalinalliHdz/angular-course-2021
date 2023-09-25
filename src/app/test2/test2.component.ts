import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {
  @Input() name: string = 'Omar';
  @Input() lastName: string = 'Labastida';
  
  @Output() onSendData = new EventEmitter();

  myvar1 = 'Hola';
  myvar2 = 4;
  myvar3 = 5;

  constructor() { }

  onclickShow(event: any){
    console.log('EVENT SHOW:', event);
    this.onSendData.emit('general data ' + this.name + ' ' + this.lastName);
  }

  test0(event:any){
    console.log('event clic', event);
    this.myvar1='Hola Amalinalli';
    console.log('SUMA=', this.myvar2+this.myvar3);
  }
  test1(event:any){
    console.log('event blur', event);
  }
  test2(event:any){
    console.log('event doubleclic', event);
  }

}
