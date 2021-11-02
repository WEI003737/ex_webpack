import { helperQsa, helperToggleClass } from '@/js/utils';

const btnEls = helperQsa('.c-buttons-collection__btn');

btnEls.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    helperToggleClass(e.target, 'is-active');
  }, false);
});
