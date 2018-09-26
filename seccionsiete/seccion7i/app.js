'use strict'

function filtrarPorLetra(heroes, letra) {

    let nuevoArr = [];


    for (let i = 0; i < heroes.length; i++) {

        let superheroe = heroes[i];
        if (superheroe[0] == 'S') {
            nuevoArr.push(superheroe);
        }
    }
    return nuevoArr;

}

let heroes = ['Doom', 'Dr.Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];

let heroesCon = filtrarPorLetra(heroes, 'S');

console.log(heroesCon);