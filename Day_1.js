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

    // return { name: "Godzilla" }; // <-- возвращает этот объект
}

let user = new BigUser();

alert(user.name);

// alert(new BigUser().name); // Godzilla, получили этот объект


let testStr = 'myfavoritsubject';

alert(testStr.toUpperCase());

let testNumber = 50.5;

alert(testNumber.toFixed(0));