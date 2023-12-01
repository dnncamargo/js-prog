const person01 = {
    name: 'Daniel',
    age: 33,
    degree: 'Graduate'
}

person01.name = 'Victor'
delete person01.degree

console.log(person01)

// Método é uma função dentro de um objeto
const person02 = {
    name: 'Leonardo',
    age: 34,
    describe: function() {
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age}`)
    }
}

person02.describe()

console.log('A soma das idades é: ' + parseInt(person01.age) + parseInt(person02.age))