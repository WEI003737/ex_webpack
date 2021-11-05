import { helperQsa, helperToggleClass } from '@/js/utils';

const btnEls = helperQsa('.c-buttons-collection__btn');

/* ie */
// Array.prototype.forEach.call(btnEls, function (el) {
//   el.addEventListener('click', function (e) {
//     helperToggleClass(e.target, 'is-active');
//   }, false);
// });

// for (const el of btnEls) {
//   el.addEventListener('click', function (e) {
//     helperToggleClass(e.target, 'is-active');
//   }, false);
// }

btnEls.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    helperToggleClass(e.target, 'is-active');
  }, false);
});
