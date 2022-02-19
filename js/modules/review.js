
export function reviewPicture(arr) {

  arr.forEach(el=> {
    const pictureRemove = document.querySelector('.big-picture');
    el.classList.remove('pictureRemove');
  })
}
