// function Alpha(name) {
//     this.name = name;
//     this.follow = undefined;
// }

// let newUser = new Alpha('Psih');

// alert(newUser.name);
// alert(newUser.follow);

function BigUser() {

    this.name = "Вася";

    return { name: 77 };

}

let user = new BigUser();

alert(user.name);



let testStr = 'myfavoritsubject';

alert(testStr.toUpperCase());

let testNumber = 50.5;

alert(testNumber.toFixed(0));
