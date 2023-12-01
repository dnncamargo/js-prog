function calculateBMI(wei, hei){
    return wei / Math.pow(hei, 2)
}

function classificateBMI(bmi) {
    if(bmi < 18.5) {
        return('abaixo da média')
    } else  if (bmi >= 18.5 && bmi < 25) {
                return('peso normal')
            } else  if (bmi >= 25 && bmi < 30) {
                        return('acima do peso')
                    } else  if(bmi >= 30 && bmi < 40) {
                                return('obeso')
                            } else return('obesidade grave')
}

const wei = 63
const hei = 1.69
const bmi = calculateBMI(wei, hei)

console.log(bmi)
console.log(classificateBMI(bmi))
