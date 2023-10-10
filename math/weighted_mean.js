/** A média ponderada de um conjunto (x1, x2, x3, ... xn) 
 * consiste no cálculo da soma dos elementos, os quais cada um possui um valor-peso associado
 * 
 * O programa fará leitura de uma matriz contendo o conjunto de números e seus respectivos pesos.
*/

const file = 'weighted_mean_source.csv';
const fs = require('fs');

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const csv = require('csv-parser'); // You may need to install 'csv-parser' package if not available

// Initialize variables to store the sum of products and sum of weights
let sumOfProducts = 0;
let sumOfWeights = 0;

// Read the CSV file (replace 'input.csv' with your file name)
fs.createReadStream(file)
  .pipe(csv())
  .on('data', (row) => {
    // Parse the value and weight from the CSV row
    const value = parseFloat(row.VALUE);
    console.log(value)
    const weight = parseFloat(row.WEIGHT);
    console.log(weight)

    // Check if both value and weight are valid numbers
    if (!isNaN(value) && !isNaN(weight)) {
      // Calculate the product of value and weight and add it to the sum of products
      sumOfProducts += value * weight;
      // Add the weight to the sum of weights
      sumOfWeights += weight;
    }
  })
  .on('end', () => {
    // Calculate the weighted mean
    const weightedMean = sumOfProducts / sumOfWeights;

    // Print the result
    console.log('Weighted Mean:', weightedMean);
  });