'use strict'
import {randomNumber, getElementFromArr} from './modules/util.js';
import {message} from './modules/data.js';
import {renderPicture} from './modules/picture.js';

export let arr = new Array(25).fill().map((u,index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: 'Лучшие книги по лучшей цене!',
  likes: randomNumber(15, 200),
  comments: [{
    id: 135,
    avatar: `img/avatar-${randomNumber(1,6)}.svg`,
    message: getElementFromArr(message, 3),
    name: 'Артём',
  }],
}));

renderPicture(arr);

