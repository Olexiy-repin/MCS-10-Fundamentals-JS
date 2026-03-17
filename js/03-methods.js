/*
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

//* Функції це об'єкти зі своїми властивостями та методами
// const fn = function () {};

// fn.test = 'Hello';

// console.dir(fn);
// console.log(fn.test);

// TODO: Викличте функцію showFullName у контексті об'єкта user
// const showFullName = function (message) {
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Hello');
// showFullName.apply(user, ['Welcome']);

// TODO: Викличте функцію changeColor в контексті різних обʼєктів
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

// changeColor.call(hat, 'white');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// console.log(sweater);

// changeColor.apply(sweater, ['yellow']);

// console.log(sweater);

// TODO: Створіть копію функції changeColor з привʼязаним контекстом
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

// /*
// function (color) {
//   let this = hat;

//   this.color = color;
// }
// */
// const changeHatColor = changeColor.bind(hat);

// changeHatColor('white');

// console.log(hat);

// TODO: Передайте метод обʼєкта в якості callback функції
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: function () {
//     console.log('this =', this);
//   },

//   showName: function () {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   callback();
// };

// someFunction(user.showName.bind(user));

// someFunction(() => {
//   user.showName();
// });
