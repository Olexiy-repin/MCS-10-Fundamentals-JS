/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

class User {
  #email;
  #tel;
  static userCounter = 0;

  constructor(firstName, lastName, email, tel) {
    // let this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.#email = email;
    this.#tel = tel;

    User.userCounter++;
    // return this;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getEmail() {
    return this.#email;
  }

  setEmail(newEmail) {
    if (User.isEmailValid(newEmail)) {
      this.#email = newEmail;
    }
  }

  get tel() {
    return this.#tel;
  }

  set tel(newTel) {
    this.#tel = newTel;
  }

  static isEmailValid(email) {
    return email.includes('@');
  }
}

const user = new User('Oleksii', 'Repin', 'oleksii_repin@gmail.com', '(543) 822-6102');

console.log(user);
console.log(user.getFullName());
console.log(user.getEmail());
user.setEmail('oleksii@gmail.com');
console.log(user.getEmail());

console.log(user.tel);
user.tel = '(631) 244-6382';
console.log(user.tel);

const userVera = new User('Vera', 'Lewis', 'vera_lewis@gmail.com', '(331) 683-4583');

console.log(userVera);
console.log(userVera.getFullName());
console.log(userVera.getEmail());
userVera.setEmail('vera@gmail.com');
console.log(userVera.getEmail());

console.log(userVera.tel);
userVera.tel = '(308) 222-4921';
console.log(userVera.tel);

console.dir(User);
