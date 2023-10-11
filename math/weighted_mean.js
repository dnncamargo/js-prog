/** A média ponderada de um conjunto (x1, x2, x3, ... xn) 
 * consiste no cálculo da soma dos elementos, os quais cada um possui um valor-peso associado
 * 
 * O programa fará leitura de uma matriz contendo o conjunto de números e seus respectivos pesos.
*/

const file = 'weighted_mean_source.csv';
const fs = require('fs');

let data = fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return data;
  }
  console.log(data);
});
