/*
 * Додавання прослуховувача подій на кожен елемент
 */

//TODO: Отримай колір квадратика по якому було здійснено клік
// const refs = {
//   boxes: document.querySelectorAll('.js-box'),
// };

// refs.boxes.forEach(box => {
//   box.addEventListener('click', event => {
//     console.log(event.currentTarget.dataset.color);
//   });
// });

/*
 * Дегегування подій
 */

//TODO: Отримай колір квадратика по якому було здійснено клік
const refs = {
  container: document.querySelector('.js-container'),
};

refs.container.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    return;
  }

  console.log(event.target.dataset.color);
});
