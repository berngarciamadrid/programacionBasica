'use strict'

for (let i = 1; i <= 5; i++) {
    let fila = '';
    for (let j = 1; j <= 5; j++) {
        fila += (j * i) + ' ';

    }
    console.log(fila);
}