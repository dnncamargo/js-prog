/**
 * Este programa calcula a média aritmética de valores inseridos via parâmetros na forma:
 * node example.js -a -b -c
 * A quantidade de parâmetros é livre
 */

console.log("Tamanho do vetor de argumentos: " + process.argv.length)

// let count = 0
// console.log("\n")
// while(count < process.argv.length) {
//     console.log(count + ": " + process.argv[count])
//     count++
// }

let mean = 0
for(let i = 2; i < process.argv.length; i++) {
    //console.log(i + "> " + parseInt(process.argv[i]))
    mean += parseInt(process.argv[i])
}
//console.log(mean)
mean /= (process.argv.length-2)

console.log("Mean: " + mean)