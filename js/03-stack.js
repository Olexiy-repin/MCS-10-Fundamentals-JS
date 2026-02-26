/*
 * - Стек викликів
 * - Порядок виконання
 */

//http://latentflip.com/loupe/
const fnA = function () {
  console.log('Hello from fnA');

  console.log('Before fnB execution');
  fnB();
  console.log('After fnB execution');
};

const fnB = function () {
  console.log('Hello from fnB');
};

console.log('Before fnA execution');
fnA();
console.log('After fnA execution');
