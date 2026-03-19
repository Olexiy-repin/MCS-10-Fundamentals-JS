/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const userMethods = {
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   setEmail(newEmail) {
//     if (newEmail.includes('@')) {
//       this.email = newEmail;
//     }
//   },
// };

// const userOleksii = Object.create(userMethods);

// userOleksii.firstName = 'Oleksii';
// userOleksii.lastName = 'Repin';
// userOleksii.age = 30;
// userOleksii.email = 'oleksii@gmail.com';

// console.log(userOleksii);

// console.log(userOleksii.getFullName());
// userOleksii.setEmail('oleksiiRepin@gmail.com');
// console.log(userOleksii);

// const userOleksii = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',
//   age: 30,
//   email: 'oleksii@gmail.com',

//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   setEmail(newEmail) {
//     if (newEmail.includes('@')) {
//       this.email = newEmail;
//     }
//   },
// };

// console.log(userOleksii);
// console.log(userOleksii.getFullName());
// userOleksii.setEmail('oleksiiRepin@gmail.com');
// console.log(userOleksii);

// const userCody = Object.create(userMethods);

// userCody.firstName = 'Cody';
// userCody.lastName = 'Hayes';
// userCody.age = 20;
// userCody.email = 'cody@gmail.com';

// console.log(userCody);

// console.log(userCody.getFullName());
// userCody.setEmail('codyHayes@gmail.com');
// console.log(userCody);

// const userCody = {
//   firstName: 'Cody',
//   lastName: 'Hayes',
//   age: 20,
//   email: 'cody@gmail.com',

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   setEmail(newEmail) {
//     if (newEmail.includes('@')) {
//       this.email = newEmail;
//     }
//   },
// };

// console.log(userCody);
// console.log(userCody.getFullName());
// userCody.setEmail('codyHayes@gmail.com');
// console.log(userCody);

/*
 * Object.create() та ланцюжки прототипів
 */

/*
 * Перебір власних властивостей з hasOwnProperty()
 */
// const objC = {
//   propertyC: 'Object C',
// };

// const objB = Object.create(objC);

// objB.propertyB = 'Object B';

// const objA = Object.create(objB);

// objA.propertyA = 'Object A';

// console.log(objA);

// for (const key in objA) {
//   if (objA.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// console.log(objA.hasOwnProperty('propertyA'));
// console.log(objA.hasOwnProperty('propertyB'));
// console.log(objA.hasOwnProperty('propertyC'));
