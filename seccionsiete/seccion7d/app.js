'use strict'

var numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];
var mayor = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] > mayor) {
        mayor = numbers[i];
    }

}

console.log(`El número mayor del array es el ${mayor}`);