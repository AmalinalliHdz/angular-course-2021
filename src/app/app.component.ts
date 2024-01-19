import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root', //Nombre del componente
  templateUrl: './app.component.html', //HTML que va a usar el componente
  styleUrls: ['./app.component.scss'], //hojas de estilo
})
export class AppComponent {
  wallets: any[] = [
    { wallet: 'Amalinalli123', name: 'Amaly', eth: 0, btc: 2 },
    { wallet: 'Omar123', name: 'Omar', eth: 5, btc: 2 },
    { wallet: 'Sinai123', name: 'Sinai', eth: 6, btc: 3 },
    { wallet: 'Ale123', name: 'Ale', eth: 0, btc: 5 },
    { wallet: 'Rolando123', name: 'Rolando', eth: 10, btc: 12 },
  ];

  transactions: any[] = [
    {
      date: '2024-01-18',
      from: 'Amalinalli123',
      to: 'Omar123',
      quantity: '2',
      moneyType: 'btc',
      mineType: 'PoW',
      miner: '5',
    },
    {
      date: '2024-01-18',
      from: 'Omar123',
      to: 'Sinai123',
      quantity: '2',
      moneyType: 'eth',
      mineType: 'PoS',
      miner: '2',
    },
    {
      date: '2024-01-18',
      from: 'Sinai123',
      to: 'Ale123',
      quantity: '2',
      moneyType: 'btc',
      mineType: 'PoW',
      miner: '5',
    },
    {
      date: '2024-01-18',
      from: 'Ale123',
      to: 'Rolando123',
      quantity: '2',
      moneyType: 'eth',
      mineType: 'PoS',
      miner: '1',
    },
    {
      date: '2024-01-18',
      from: 'Rolando123',
      to: 'Amalinalli123',
      quantity: '2',
      moneyType: 'btc',
      mineType: 'PoW',
      miner: '21',
    },
    {
      date: '2024-01-18',
      from: 'Amalinalli123',
      to: 'Sinai123',
      quantity: '2',
      moneyType: 'eth',
      mineType: 'PoS',
      miner: '2',
    },
    {
      date: '2024-01-18',
      from: 'Sinai123',
      to: 'Rolando123',
      quantity: '2',
      moneyType: 'btc',
      mineType: 'PoW',
      miner: '5',
    },
  ];

  @ViewChild('myDiv1') myDiv1: ElementRef;
  @ViewChild('myDiv2') myDiv2: ElementRef;

  @ViewChild('myCompAmalinalli') myCompAmalinalli: any;
  //--------------------------
  title = 'angular2021';
  myStatus = 'my status';
  sw = true;
  color = '';
  tictok = of([1, 2, 3, 4, 5]);
  tiktok = new BehaviorSubject(1); //Solo almacena datos
  personASub: Subscription = new Subscription();

  constructor(private router: Router) {
    //observables & subscribes
    /*this.tictok.pipe(
      map(s=>s.join('-')),
      map(s=>s + ' Hola ')
    ).subscribe(v => {
      console.log('PA VIDEO ', v)
    });
    this.tictok.pipe(
      filter(v => v[1]%2===0)
    ).subscribe(v => {
      console.log('PB VIDEO ', v)
    });
    this.tictok.subscribe(v => {
      console.log('PC VIDEO ', v)
    });

    this.personASub = this.tiktok.pipe().subscribe(v => {
      console.log('PA2 VIDEO ', v)
    });
    this.tiktok.pipe().subscribe(v => {
      console.log('PB2 VIDEO ', v)
    });
    this.tiktok.subscribe(v => {
      console.log('PC2 VIDEO ', v)
    });
*/
    /*------------------------------------
    //operador MAP [Devuelve un nuevo array]
   const testMap = [1,2,3,4,5,6].map(item => item);
   console.log(testMap);
   const testMap2 = [1,2,3,4,5,6].map(item => item*2);
   console.log(testMap2);
    
   //operador FOREACH [No va a devolver un nuevo array]
    const testForeach = [1,2,3,4,5,6].forEach(item => item);
    console.log(testForeach);

    //operador FIND 
    const testFind = [1,2,3,4,5,6].find(item => item === 1);
    console.log(testFind);

    //operador FILTER
     const testFilter = [1,2,3,4,5,6].filter(item => item%2 === 0); //filtra todos los que sean pares
     console.log(testFilter);

     //operador FINDINDEX
     const testFindIndex = [90,300,3,4,5,6].findIndex(item => item === 90); 
     console.log(testFindIndex);

     //operador FINDINDEXOF
     const testFindIndexOf = [90,300,3,4,5,6].indexOf(300); 
     console.log(testFindIndexOf);
     const testFindIndexOf2 = 'amalinalli'.indexOf('l'); 
     console.log(testFindIndexOf2);

     //operador JOIN
     const testJoin = [90,300,3,4,5,6].join(','); 
     console.log(testJoin);

     //operador SPLIT
     const testSplit = '90,300,3,4,5,6'.split(','); 
     console.log(testSplit);

     //operador  SPLICE
     const testSplice = [1,2,3,4,5,6].splice(2,3); 
     console.log(testSplice);

     //operador REDUCE
     const testReduce = [1,2,3,4,5,6].reduce((acc, value) => acc + value); 
     console.log(testReduce);
     const testReduce2 = [1,2,3,4,5,6].reduce((acc, value) => acc + value, 100); //Se agrega valor inical para acc
     console.log(testReduce2);

     //operador ENTRIES
     const testEntries = {value:'amalinalli', key:'AHS'}; 
     console.log(Object.entries(testEntries));
     console.log(Object.keys(testEntries));
     console.log(Object.values(testEntries));

     //operador LET [Solo se ejecuta dentro del contexto donde esta definido]
     let testLet; 
     for(let i=0;i<[1,2,3,4,5,6].length; i++) {}//let : variable que sirve solo donde esta definida

     //operador SPREAD (...) Unir arrays, json
     const array1 = [1,2,3,4,5,6];
     const array2 = [7,8,9,10, ...array1]; //Se copia lo que esta dentro del array1 al array2
     console.log(array2);
     const per1 = {name:'a', age:12};
     const per2 = {data:'R', ...per1};//Se copia lo que esta dentro del per1 al per2
     console.log(per2);

     //Desestructuracion
     const per3 = {name:'amalinalli',
      age:12,
      phone:123,
      extra:123,
      response:200};

      const {name} = per3;
      console.log('name=', name);

      const {name:mivar} = per3;
      console.log('name=', mivar);

      //EJERCICIOS
      //{1:'a', 2:'a', 3:'a', 4:'a', 5:'a', 6:'a'} Convertir a un array y sumar numeros pares
      const jsonExe = {1:'a', 2:'a', 3:'a', 4:'a', 5:'a', 6:'a'};
      const arrayNum = Object.keys(jsonExe).map(n=>parseInt(n));
      const numPair = arrayNum.filter(item => item%2 === 0);
      console.log(numPair.reduce((acc, value) => acc + value));

      //[1,2,3,4,5,6] filtrar numeros impares y mostrar como cadena
      const arrayExe = [1,2,3,4,5,6].filter(num=> num%2 != 0)
      const cad = arrayExe.join(',');
      console.log(cad);*/
  }

  onAddVideo() {
    this.tiktok.next(2);
  }
  person1Unsubscribed() {
    this.personASub.unsubscribe();
  }

  printDataAmalinalliComp(event: any) {
    console.log('AMALINALLI COMP:', event);
  }

  printData(event: any) {
    console.log('CHILD COMP SEND DATA:', event);
  }
  test(event: any) {
    console.log('AMALY DIRECTIVE -- ', event);
  }
  onShowLocalVars() {
    console.log(this.myDiv1, this.myDiv2, this.myCompAmalinalli);
    this.myDiv2.nativeElement.value = 'Amalinalli';
    this.myCompAmalinalli.onclickTest();
  }

  onMine(transaction: any, i: number): void {
    const indexFrom = this.wallets.findIndex(
      (w) => w.wallet === transaction.from
    );
    const indexTo = this.wallets.findIndex(
      (w) => w.wallet === transaction.from
    );

    this.wallets[indexFrom][transaction.moneyType] =
      this.wallets[indexFrom][transaction.moneyType] - transaction.quantity;

    this.wallets[indexTo][transaction.moneyType] =
      this.wallets[indexTo][transaction.moneyType] + transaction.quantity;

    this.transactions.splice(i, 1);
  }

  getTransactionsStatus(): boolean {
    const aux = this.transactions.filter(
      (t) => t.mineType === 'PoS' && t.miner < 20
    );
    return this.transactions.length === aux.length;
  }

  goUser() {
    this.router.navigate(['/user']);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
