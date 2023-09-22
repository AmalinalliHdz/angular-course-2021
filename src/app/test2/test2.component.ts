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
  constructor() { }

  onclickShow(event: any){
    console.log('EVENT SHOW:', event);
    this.onSendData.emit('general data ' + this.name + ' ' + this.lastName);
  }

  

}
