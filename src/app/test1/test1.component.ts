import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'amalinalli-comp',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {

  @Input('status') statusTest: string = 'working';
  @Output() onSendData= new EventEmitter();

  constructor() { }
  onclickTest(event: any){
    console.log('EVENT CLICK:', event);
    this.onSendData.emit({name: 'amalinalli', status:'busy'});
  }
}