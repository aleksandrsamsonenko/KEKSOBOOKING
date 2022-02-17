

export function renderPicture(arr) {
  const fragment = document.createDocumentFragment();

  arr.forEach(el=>{
    const picture = document.querySelector('#picture')
    const cloneElement = picture.cloneNode(true);
    const wrapper = cloneElement.content.querySelector('.picture');
    const comments = wrapper.querySelector('.picture__comments');
    comments.textContent = el.comments.length;
    const likes = wrapper.querySelector('.picture__likes');
    likes.textContent = el.likes;
    const image = wrapper.querySelector('.picture__img');
    image.src = el.url;
    fragment.appendChild(wrapper);
  })
  const pictures = document.querySelector('.pictures');

  pictures.appendChild(fragment);
}


