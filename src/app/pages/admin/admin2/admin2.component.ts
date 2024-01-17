import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin2',
  template:`<p class="hola">
  admin2 works!
  </p>`,
  styles:[
    `.hola{
      background-color: yellow;
      color: red;
    }`
  ]
})
export class Admin2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}