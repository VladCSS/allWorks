let number = prompt('Введите число', );
let secondNumber = prompt('Введите  2 число', '');
let operation = prompt('Какую операцию вы хотите выполнить?', '');

function math(plus, minus, multiplication, division, doNothing) {
    if (operation == '+') plus()
    else if (operation == '-') minus()

    else if (operation == '*') multiplication()

    else if (operation == '/') division()

    else doNothing();

}

function nothing() {
    alert('Do nothing...')
}

function plus_plus() {
    alert(+number + +secondNumber);
}

function minus_minus() {
    alert(+number - +secondNumber);
}

function multiplication_multiplication() {
    alert(+number * +secondNumber);
}

function division_division() {
    alert(+number / +secondNumber);
}


math(plus_plus, minus_minus, multiplication_multiplication, division_division, nothing);
