import { Component, OnInit, OnChanges, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit, OnChanges, DoCheck{

  @Input() name3='Sinai';

  constructor() { 
    console.log('CONSTRUCTOR');
  }

  ngOnInit(){
    console.log('ON INIT');
  }
  ngOnChanges(){
    console.log('ON CHANGES');
  }
  ngDoCheck(){
    console.log('DO CHECK');
  }
  
} 