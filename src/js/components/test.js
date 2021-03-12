function changeText (text) {
  let el = document.getElementById('text');
  el.innerText = text;
  console.log(text);
  console.log(12);
};

function doSomething (arr) {
  let length = arr.map((el) => el.length);
  console.log(length);
};

export {
  changeText,
  doSomething
}
