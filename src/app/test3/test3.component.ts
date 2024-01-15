import { Component, OnInit, OnChanges, DoCheck, Input, OnDestroy, 
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit, OnChanges, DoCheck, OnDestroy,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

  @Input() name3='Sinai';

  constructor() { 
    console.log('CONSTRUCTOR');
  }

  ngOnInit(){
    //console.log('ON INIT');
  }
  ngOnChanges(changes: any){
    //console.log('ON CHANGES', changes);
  }
  ngDoCheck(){
    //console.log('DO CHECK');
  }
  ngOnDestroy(){
    //console.log('ON DESTROY');
  }
  ngAfterContentInit(){
    //console.log('CONTENT INIT');
  }
  ngAfterContentChecked(){
    //console.log('CONTENT CHECK');
  }
  ngAfterViewInit(){//Util al cargar un maps
    //console.log('VIEW INIT');
  }
  ngAfterViewChecked(){
    //console.log('VIEW CHECK');
  }
} 