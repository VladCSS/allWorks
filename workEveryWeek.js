// let i = 0;
// while (i < 10) {
//     i += 1;
//     console.log(i);

// }
// for (i = 1; i < 100; i += 1) {
//     console.log(i);
// }

// let name = 'Zero men';
// console.log(name.slice(0, 7));
// console.log(name.replace('Zero', 'noob'));
// console.log(name.toUpperCase());
// console.log(name.charAt(0));
// let manyWords = ['I', 'we', 'you'];
// for (let i = 0; i < manyWords.length; i++) {
//     console.log(manyWords[i]);
//     console.log(manyWords.pop());
// }
// // Objejcts    i
// let car = {
//     type: 'Prorche',
//     age: '25 years',
//     whoHaveThisCar: 'I',
// };
// // console.log(car.age);
// let i = function(b, c) {
//     console.log(b + c);
// };
// i(50, 20);
// function gloCB(a) {
//     return a;
// };
// let gloCD = gloCB(10, 10);
// alert(gloCD);
// function appSe(set) {
//     return set;
// }
// let toStart = appSe(5.7);
// alert(Math.round(toStart));

// function nothing(random) {
//     alert((random) % 5);

// };
// nothing(11);


// if (fux == true) {
//     alert('HelloNumber');
// } else if (fux === undefined) {
//     alert('Error');
// } else {
//     alert('Do nothing');
// }
// let name = 'JohnSina';

// function Message() {
//     let name = 'Baker';
//     let whoIs = 'who are you?' + name;
//     alert(whoIs);

// }
// Message();

// alert(name);
// function question(yes, no) {
//     let yourQuestion = prompt('Вы бухаете?', '');
//     if (yourQuestion == 'fuckyou') yes()
//     else no();
// }

// function askYes() {
//     alert('You say  fuck,really');
// }

// function askNo() {
//     alert('You say  nothing,WTF');
// }
// question(askYes, askNo);
// sayHi("Вася"); // Привет, Вася

// function sayHi(name) {
//     alert('Привет ' + name);
// }
// let age = prompt("Сколько Вам лет?", 18);



// if (age < 18) {

//     welcome = function() {
//         alert("Привет!");
//     };

// } else {

//     welcome = function() {
//         alert("Здравствуйте!");
//     };

// }

// welcome();


// let abc = prompt('Pls add  a number', '');

// function namberYes() {
//     alert('So cool');
// }

// function namberNo() {
//     alert('So bad');
// }
// if (abc <= 20) {
//     namberYes();
// } else {
// //     namberNo();
// // }
// let age = prompt("Сколько Вам лет?", 18);

// let welcome;

// if (age < 18) {

//     welcome = function() {
//         alert("Привет!");
//     };

// } else {

//     welcome = function() {
//         alert("Здравствуйте!");
//     };

// }
// const number = prompt('Введите число', );
// const secondNumber = prompt('Введите  2 число', '');
// const operation = prompt('Какую операцию вы хотите выполнить?', '');

// function math() {
//     if (operation == '+') plus() //  переписать на  switch
//     else if (operation == '-') minus()

//     else if (operation == '*') multiplication()

//     else if (operation == '/') division()

//     else nothing();
//     alert('Hello world');
// }

// function nothing() {
//     alert('Do nothing...')
// }

// function plus() {
//     alert(+number + +secondNumber); //Замена через  number
// }

// function minus() {
//     alert(+number - +secondNumber);
// }

// function multiplication() {
//     alert(+number * +secondNumber); // console
// }

// function division() {
//     alert(+number / +secondNumber);
// }


// math()





// let abcer = (a, c) => a / c;
// alert(abcer(6, 6));


// let user = {
//     name: 'Vlad',
//     'color da': 'yea',

// }

// // delete user['color da'];

// // console.log(user['color da']);
// const vlue = prompt('Какое свойство  вы хотите получить?', '');

// console.log(user[vlue]);


// function testIs(name, age) {
//     return {
//         thing: name,
//         otherThing: age,
//     }
// }

// let randomUser = testIs('Iochan', 28);
// console.log(randomUser.thing);
// let user = { name: "John", age: 30 };

// alert("age" in user); // true, user.age существует
// alert("blabla" in user);


let test = {
    I: 'vlad',
    age: 20,
    job: 'programer',
};

for (key in test) {

    console.log(key);
    console.log(test[key])
}
