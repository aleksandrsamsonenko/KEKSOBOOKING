import {photo} from './data.js';


const sampleTemplate = document.querySelector('#picture').content;

const picturesContainer = document.querySelector('.pictures');

const MAX_PHOTOS_COUNT = 25; // Введите желаемое количество фото
const photos = photo(MAX_PHOTOS_COUNT);

const fragment = document.createDocumentFragment();

for (let idx = 0; idx < photos.length; idx++) {
  const copyTemplate = sampleTemplate.cloneNode(true);
  copyTemplate.querySelector('.picture__img').setAttribute('src', photos[idx].url);
  copyTemplate.querySelector('.picture__likes').textContent = photos[idx].likes;
  copyTemplate.querySelector('.picture__comments').textContent = photos[idx].comments.length;
  fragment.appendChild(copyTemplate);
}

picturesContainer.appendChild(fragment);

export {photos};
