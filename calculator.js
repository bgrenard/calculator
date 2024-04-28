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

console.log(`5 + 3 = ${add(5, 3)}`);
console.log(`5 - 3 = ${subtract(5, 3)}`);
console.log(`5 * 3 = ${multiply(5, 3)}`);
console.log(`5 / 3 = ${divide(5, 3)}`);
console.log(`-5 / 0 = ${divide(-5, 0)}`);