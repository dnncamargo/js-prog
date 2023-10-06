/**
 * A Média Geométrica serve para conjuntos de números positivos, que são interpretados de acordo com seu produto
 * Por exemplo, a média geométrica de cinco valores: 4, 36, 45, 50, 75 é:
 * ( 4 * 36 * 45 * 50 * 75 ) ^ (1/5) ou pela raíz quíntupla da sequência
 * Lembre-se de que esse tipo de média não admite números negativos
 */

let mean = 1
let argv
for(let i = 2; i < process.argv.length; i++) {
    argv = parseFloat(process.argv[i])
    if(argv > 0) {
        mean *= argv
    }
    else {
        console.log("Input Validation Error")
        process.exit(1)
    }
    
}

mean = Math.pow(mean, (1/(process.argv.length-2)))

console.log("Geometric mean: " + mean)