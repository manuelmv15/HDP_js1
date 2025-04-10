
const DibujarTriangulo = function (niveles) {
    let espacio = niveles - 1;
    for (let index = 1; index <= niveles; index++) {

        for (let j = 0; j < espacio; j++) {
            process.stdout.write(" ");
        }
        for (let j = 0; j < index * 2 - 1; j++) {
            process.stdout.write("*");
        }
        console.log(" ")
        espacio--;
    } 
}

console.log("Triangulo de 7 niveles")
DibujarTriangulo(7)

const prompt = require('prompt-sync')();

console.log("\n\n")

do {
    let altura = prompt("Ingrese la altura del triangulo: ")    
    if (altura<3) {
        console.log("La altura debe ser mayor/igual a 3")
    }
    else{
        DibujarTriangulo(altura)
        break;
    }
} while (true);



