/*
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

// console.log('courses:', courses);

//~ Через цикл for
// for (let i = 0; i < courses.length; i++) {
//   const item = courses[i];

//   console.log(item);
// }

//~ Через цикл for...of
// for (const item of courses) {
//   console.log(item);
// }

/*
TODO: Напиши скрипт для перебора масиву fruitsList.
TODO: Для кожного елемента масиву виведи в консоль рядок
TODO: у форматі номер_елемента: значення_елемента.
TODO: Нумерація елементів повинна починатися з 1.
*/
// const fruitsList = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// console.log(fruitsList);

//~ Через for
// for (let i = 0; i < fruitsList.length; i++) {
//   console.log(`${i + 1}: ${fruitsList[i]}`);
// }

//~ Через for...of
// for (const fruit of fruitsList) {
//   const idxOfFruit = fruitsList.indexOf(fruit);

//   console.log(`${idxOfFruit + 1}: ${fruit}`);
// }
