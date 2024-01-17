import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin2',
  template: `<p class="hola">
  admin2 works!
  </p>
  <button (click)= "testParams('Omar')"> TEST</button>
  `,
  styles: [
    `.hola{
      background-color: yellow;
      color: red;
    }`,
  ],
})
export class Admin2Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  public testParams(name: string, lastname?: string='godinez'): string {
    console.log(name + ' ' + lastname);
    return name + ' ' + lastname;
  }
}
