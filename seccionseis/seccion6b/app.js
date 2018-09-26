'use strict'



class Coche {
    constructor(marca, tipo, puertas) {

        var self = this;
        self.marca = marca;
        self.tipo = tipo;
        self.puertas = puertas;
        self.creadoEn = 'hoy';
        self.encendido = false;
        self.gasolina = 100;
    }

    encenderCarro() {
        var self = this;
        if (self.encendido == true) {
            console.log(`El coche está encendido, ya no se puede encender`);
            self.encendido = false;
            console.log(`Hemos apagado el coche`);
        } else {
            self.encendido = true;
            console.log('El coche está encendido');

        }

        return this;

    }

    realizarViaje(consumo) {

        this.gasolina = this.gasolina - consumo;
        if (this.gasolina <= 0 || this.encendido == false) {
            this.encendido = false;
            console.log('El coche está apagado, necesita gasolina');
        } else {
            console.log(`Le queda ${this.gasolina} de gasolina`);
        }
        console.log(this.gasolina);


    }

}

let coche = new Coche('Mazda', 'Sedan', 2);
console.log(coche);
coche.encenderCarro();
coche.realizarViaje(25);
coche.realizarViaje(25);
coche.realizarViaje(25);
coche.realizarViaje(25);
coche.realizarViaje(25);