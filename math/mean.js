/**
 * Este programa calcula a média aritmética de valores inseridos via parâmetros na forma:
 * node example.js -a -b -c
 * A quantidade de parâmetros é livre
 */

console.log("Tamanho do vetor de argumentos: " + process.argv.length)

let count = 0
console.log("\n")
while(count < process.argv.length) {
    console.log(count+1 + ": " + process.argv[count])
    count++
}
