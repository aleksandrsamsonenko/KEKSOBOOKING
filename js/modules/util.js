export let randomNumber = function (startNumber, endNumber) {
  const number = Math.floor(Math.random() * (endNumber - startNumber) + startNumber);
  return number;
}


export let getElementFromArr = function (arr, number) {
  const currentElement = arr.slice(number);
  return currentElement;
}
