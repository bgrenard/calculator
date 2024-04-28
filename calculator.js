let a;
let b;
let operator;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    //This will return Infinity if b = 0, a > 0. Will return -Infinity if b = 0, a < 0.
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return subtract(a, b);
    }
    else if (operator === '*') {
        return multiply(a, b);
    }
    else {
        return divide(a, b);
    }
}

console.log(`5 + 3 = ${operate('+', 5, 3)}`);
console.log(`5 - 3 = ${operate('-', 5, 3)}`);
console.log(`5 * 3 = ${operate('*', 5, 3)}`);
console.log(`5 / 3 = ${operate('/', 5, 3)}`);
console.log(`-5 / 0 = ${operate('/', 5, 0)}`);