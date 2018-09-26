'use strict'

function describirPersona(p) {
    console.log("La persona se llama: " + persona.nombre + " tiene: " + persona.edad + " años" + " y mide: " + persona.estatura);
    console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);
}

let persona = {
    nombre: 'Bernabé',
    edad: 33,
    estatura: 1.86
}

describirPersona(persona);