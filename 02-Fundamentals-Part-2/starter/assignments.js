'use strict';

const country = 'India';
const continent = 'Asia';
let population = 1200;

console.log(country, continent, population);

let isIsland = false;
let language;

console.log(isIsland, population, country, language);

language = 'Hindi';

console.log(population / 2);
console.log(population + 1);

console.log(population > 6 ? 'Yes' : 'No');
console.log(population > 33 ? 'Yes' : 'No');

let description = `${country} is in ${continent}, and its ${population} million people speak ${language} ❤`;
console.log(description);

let numNeighbours = prompt(
  'How many neighbour countries does your country have?'
);
if (Number(numNeighbours) === 1) {
  console.log(`Only ${numNeighbours} border`);
} else if (numNeighbours > 0) {
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`);
}
console.log(numNeighbours);

const factorial = (num) => {
  if (num === 1) return 1;
  else return num * factorial(num - 1);
};

const printFactorial = (num) => {
  console.log(`Facorial of ${num} is ${factorial(num)}`);
  return 1;
};

console.log(printFactorial(10));

const capitals = ['India', 1980];
console.log(capitals);
