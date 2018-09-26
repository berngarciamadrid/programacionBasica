function imprimirTabla(base, limite) {

    //imprimir la tabla del 10

    //límite 20

    for (let i = 1; i <= limite; i++) {
        let resultado = base * i;

        console.log(base + ' x ' + i + ' = ' + resultado);
    }
}

imprimirTabla(5, 15);
imprimirTabla(15, 5);