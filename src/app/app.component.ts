import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Nombre del componente
  templateUrl: './app.component.html',//HTML que va a usar el componente
  styleUrls: ['./app.component.scss'] //hojas de estilo
})
export class AppComponent {
  title = 'angular2021';
  myStatus = 'my status';
  sw = true;
  
  constructor(){
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
      console.log(cad);
  }

  printDataAmalinalliComp(event:any){
    console.log('AMALINALLI COMP:', event)
  }

  printData(event: any){
    console.log('CHILD COMP SEND DATA:', event);
  }
}
