/*
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

// const numbers = [5, 10, 20];

/*
~ З ініціалізацією акумулятора
  ~ 1 Ітерація
    acc = 0;
    el = 5;
    idx = 0;
    arr = numbers;

    return 5;

  ~ 2 Ітерація
    acc = 5;
    el = 10;
    idx = 1;
    arr = numbers;

    return 15;

  ~ 3 Ітерація
    acc = 15;
    el = 20;
    idx = 2;
    arr = numbers;

    return 35;
*/

/*
~ Без ініціалізації акумулятора
  ~ 1 Ітерація
    acc = 5;
    el = 10;
    idx = 1;
    arr = numbers;

    return 15;

  ~ 2 Ітерація
    acc = 15;
    el = 20;
    idx = 2;
    arr = numbers;

    return 35;
*/

// const total = numbers.reduce((acc, el, idx, arr) => {
//   return acc + el;
// });

// console.log(numbers);
// console.log(total);

/*
TODO: Рахуємо загальну зарплату
 */
// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// console.log('salary =', salary);

// const salaryValues = Object.values(salary);

// console.log('salaryValues =', salaryValues);

// const totalSalary = salaryValues.reduce((acc, salaryValue) => acc + salaryValue);

// console.log('totalSalary =', totalSalary);

/*
TODO: Рахуємо загальну кількість годин
 */
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// console.table(players);

// const totalTimePlayed = players.reduce((acc, el, idx, arr) => {
//   return acc + el.timePlayed;
// }, 0);

// console.log(totalTimePlayed);
