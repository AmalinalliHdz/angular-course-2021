import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, concat } from 'rxjs';

@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.css'],
})
export class Admin1Component implements OnInit {
  name = 'omar';
  auxJson = { name: 'Ale', lastName: 'Sanchez' };
  auxObs$ = new BehaviorSubject<any>([1, 2, 3, 4, 5]);

  constructor() {}

  ngOnInit() {}

  onAdd() {
    const aux = this.auxObs$.getValue();
    const aux1 = aux.concat([6, 7]);
    this.auxObs$.next(aux1);
  }
}
