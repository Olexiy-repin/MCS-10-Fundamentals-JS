/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const courseHTML = {
  title: 'HTML Fundamentals',
  description: 'Some description...',
  price: 10000,
  rating: 4.5,
  images: {
    large: 'https://my-site.com/large.jpg',
    medium: 'https://my-site.com/medium.jpg',
    small: 'https://my-site.com/small.jpg',
  },
};

console.log(courseHTML);

const getKey = function () {
  return 'price';
};

const key = 'price';

console.log(courseHTML.title);
console.log(courseHTML.rating);

console.log(courseHTML['description']);
console.log(courseHTML[getKey()]);

console.log(courseHTML[key]);

courseHTML.price = 8000;
courseHTML.test = 'Hello world';

console.log(courseHTML);

console.log(courseHTML.images.small);
console.log(courseHTML['images']['medium']);
