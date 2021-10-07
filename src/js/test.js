// window.onload = function () {

//   animateDiv();
//   console.log('hi');

// };

// $(document).ready(function() {
//   animateDiv();
// });

// function makeNewPosition (target, container) {

//   // Get viewport dimensions (remove the dimension of the div)
//   const h = container.clientHeight() - target.clientHeight();
//   const w = container.clientWidth() - target.clientWidth();

//   const nh = Math.floor(Math.random() * h);
//   const nw = Math.floor(Math.random() * w);

// const imgRight = 'http://f00.inventorspot.com/images/goldfish.jpg';
// const imgLeft = 'http://2.bp.blogspot.com/-F8s9XEIBSsc/T41x37x9w1I/AAAAAAAAB9A/cDfFJLCERII/s1600/Goldfish-1600x1200.jpg';

// if (target.clientLeft < nw) {
//   target.attr('src', imgRight);
// } else {
//   target.attr('src', imgLeft);
// }

//   return [nh, nw];

// }

// function animateDiv (target) {
//   const newq = makeNewPosition();
//   const speed = calcSpeed([target.clientTop, oldq.clientLeft], newq);

// $('#ghost').animate({
//   top: newq[0],
//   left: newq[1],
// }, speed, function() {
//   animateDiv();
// });

// };

// function calcSpeed (prev, next) {

//   const x = Math.abs(prev[1] - next[1]);
//   const y = Math.abs(prev[0] - next[0]);
//   const greatest = x > y ? x : y;
//   const speedModifier = 0.2;
//   const speed = Math.ceil(greatest / speedModifier);
//   return speed;

// }



const ghostEl = qs('#ghost');
const container = qs('#field');

// window.requestAnimationFrame(render);

function render () {

  const newq = makeNewPosition(ghostEl, container);
  // const speed = calcSpeed([ghostEl.clientTop, ghostEl.clientLeft], newq);
  ghostEl.style.left = `${newq[1]}px`;
  ghostEl.style.top = `${newq[0]}px`;

  window.requestAnimationFrame(render);

}

function calcSpeed (prev, next) {

  const x = Math.abs(prev[1] - next[1]);
  const y = Math.abs(prev[0] - next[0]);
  const greatest = x > y ? x : y;
  const speedModifier = 0.2;
  const speed = Math.ceil(greatest / speedModifier);
  return speed;

}

function makeNewPosition (target, container) {

  const h = container.clientHeight - target.clientHeight;
  const w = container.clientWidth - target.clientWidth;
  const nh = Math.floor(Math.random() * h);
  const nw = Math.floor(Math.random() * w);
  return [nh, nw];

}
