// let project = [
//     'zeus',
//     'apis',
//     'other',
// ];

// console.log( project[2] ); // 'other'

// project[4] = 'DarkOrbit';

// console.log( project[4] ); // 'DarkOrbit'

// console.log( project.length ); // 5

// console.log( project.pop() ); //  'DarkOrbit'

// console.log( project ); // 'zeus', 'apis', 'other', 'empty'

// console.log( project.push('Vengeance') ); //Vengeance

// console.log( project );  // "zeus", "apis", "other", empty, "Vengeance"

// console.log( project.shift() ); // 'zeus'

// console.log( project.unshift('coca-cola') );

// console.log( project ); // "coca-cola", "apis", "other", empty, "Vengeance"

// // проходит по значениям
// for (let key of project ) {
//      alert( key );   
// };


// let project2 = [
//     [ 1, 2 ,3 ],
// ];

// // console.log( project2[1][2] ); // 6

// // console.log( String(project2) === '1,2,3,4,5,6' ); // 1, 2, 3, 4, 5, 6

// // alert( "1,2" + 4 ); // "1,24"

// project2.splice(1, 1, 'Hello', );

// console.log(  project2  );

// let arr = [1, 2, 5];

// // начиная с индекса -1 (перед последним элементом)
// // удалить 0 элементов,
// // затем вставить числа 3 и 4
// arr.splice(-1, 0, 3, 4);

// alert( arr ); // 1,2,3,4,5


// ['1', '2', '3'].forEach( alert );

// alert( arr.indexOf( 3,0 ));

// alert( arr.includes(2) );


// let newFile = [
//     {id: 1, name: 6},
//     {id: 2, name: 7},
//     {id: 3, name: 16},

// ];

// let find = newFile.find(item => item.name == 16);

// console.log(find.id);  // 3

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); // 5,7,6


// let cc = [ 1, 8 ,3 ];

// cc.sort();

// alert( cc );

// [1, -2, 15, 2, 0, 8].sort( (a,b) => {
//     alert( a + " <> " + b );
//   });

// let cc = [ 3, 5, 6, 8 ];

// cc.reverse(); 

// alert( cc );

// let names = 'Варламов, Устим, Йохан';

// let arr = names.split(',');

// for ( let name of arr) {
//     alert( ` Сообщение получит: ${name}.` );
// }

// let arr = 'Йохан, Устим, МТБ'.split( ',', 2 );

// alert( arr ); // Йохан, Устим

// let cc = 'МТБ';

// let cc_I = cc.split(``);

// alert( cc_I );

// let js = ['Что-то', '+', 'еще'];

// let jsX = js.join('');

// alert( jsX );


                                                                                           // Тест Map

// let test =  new Map();

// test.set( '1', 'map1' )
//     .set( 5, '40' );

// for( let key of test.entries() ) {
//     alert( key );
// };

// let obj = Object.fromEntries( test.entries() );
                                                                    // Каррирование  #рано

// function curry(f) { // curry(f) выполняет каррирование
//     return function(a) {
//       return function(b) {
//         return f(a, b);
//       };
//     };
//   }
  
// //   использование
//   function sum(a, b) {
//     return a + b;
//   }
  
//   let carriedSum = curry(sum);
  
//   console.log( carriedSum(1)(2) ); // 3


// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // что будет показано: "John" или "Pete"?


// /**
//  * Складываем числа
//  * 
//  * @param {number} a - первое число
//  * @param {number} b - второе число
//  * @returns {number}
//  * @var {function} summ - вводим значения
//  * @console - результат
//  */


// function summ( a, b ){  //
//   return a + b;        
// };

// let summResult = summ( 10, 20 ); 

// console.log( summResult ); 

                                                            // DOM

// console.dir( document );

// const arr = [ 'Pride', 'Cube', 'Scott', 'Merida', 'Canondale', 'Specialized', 'BoomTrek', 'Trek', 'Marin', 'Sram' ];

// // function ar( b ) {
        
// //     for( let i = arr.length-1 ; i < arr.length; i++ ) {
        
// //         return b + i;

// //     }

// //  }; 

// let c = arr[0];
// arr[0] = arr[arr.length - 1];
// arr[arr.length - 1 ] = c;

// console.log( arr );








// console.log( arr );
// for( elem of arr ) {
//     console.log( arr )
// };
   
// }; 

// console.log( arr );
// // [ arr[0], arr[2] ] = [ arr[2], arr[0] ];


// function abc( a ) {
//     if ( a >= 100 || a <= 1 ) {
//         console.log( 'undefined' );
//     }
//     else if ( a%2 === 0 ) {
//         console.log('YES');
//     }
//     else {
//         console.log('NO');
//     };
// };

// console.log( abc(6) );

// function text( a ){
//     if ( a.length > 10 ){
//         // console.log( a[0] + a.length - 2 + a[a.length] );
//         console.log(a.charAt(0) + Number(a.length-2) + a.charAt(a.length - 1));
//     }
//     else{
//         console.log( a );
//     };
// };

// console.log( text( 'aaaaaaafthrfdhrthrtfhfhfhfh') );

const ar = [ 'Vel','Specialized', 'MacBook' ];

ar.forEach( Do => console.log( Do ));


