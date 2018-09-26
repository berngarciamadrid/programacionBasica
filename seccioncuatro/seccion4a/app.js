// Crear un algoritmo, que basado en la nota
// imprima si el alumno aprueba la materia
// aprueba con 60 puntos
// Si el alumno tiene nota menor de 50
// Imprimir un mensaje que diga, por favor estudie más


let nota = 45;

if (nota >= 60) {
    console.log("El alumno aprueba la clase");
    if (nota > 90) {
        console.log("excelente, eres un alumno aventajado");
    }
} else {
    console.log("El alumno suspendió");
    if (nota < 50) {
        console.log("Por favor, estudie más");
    }
}