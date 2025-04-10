const prompt = require('prompt-sync')();

let altura = 7;

let espacio = altura - 1;

for (let index = 1; index <= altura; index++) {

    for (let j = 0; j < espacio; j++) {
        process.stdout.write(" ");
    }
    for (let j = 0; j < index * 2 - 1; j++) {
        process.stdout.write("*");
    }
    console.log(" ")
    espacio--;

} 