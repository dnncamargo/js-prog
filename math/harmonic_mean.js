/** A média harmônica de um conjunto (x1, x2, x3, ..., xn) 
 * é definida pela divisão de n pela soma dos inversos dos elementos,
 * sendo n a quantidade de elementos e todos diferentes de zero */

let den = 0
let argv
for(let i = 2; i < process.argv.length; i++) {
    argv = parseFloat(process.argv[i])
    if(argv > 0) {
        den += (1/argv)
    }
    else {
        console.log("Input Validation Error")
        process.exit(1)
    }
}

let mean = (process.argv.length-2) / den
console.log(mean)