/*
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 */

/*
TODO: Реалізуйте методи для обʼєкта playlist
TODO: - changeName(title);
TODO: - updateRating(newRating);
*/
const playlist = {
  name: 'My amazing playlist',
  rating: 4,
  tracks: ['track-1', 'track-2', 'track-3'],

  updateRating(newRating) {
    if (newRating >= 0 && newRating <= 5) {
      this.rating = newRating;
    }
  },

  changeName(newName) {
    if (newName !== '') {
      this.name = newName;
    }
  },
};

// const updatePlaylistRating = function (playlistInfo, newRating) {
//   if (newRating >= 0 && newRating <= 5) {
//     playlistInfo.rating = newRating;
//   }
// };

// updatePlaylistRating(playlist, 4.5);

playlist.updateRating(4.5);
playlist.changeName('My new playlist');

console.log('playlist:', playlist);
