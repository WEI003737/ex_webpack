import { helperQs, helperCryptoRandom } from '@/js/utils';

const btnStart = helperQs('.animation-falling__btn--start');
btnStart.addEventListener('click', falling, false);

function falling () {
  const count = 10;
  const container = helperQs('#animationFalling');

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const div = document.createElement('div');
    const imgPath = `../../static/images/leaf${(Math.round(helperCryptoRandom(3, 5)))}.png`;
    div.className = 'animation-falling__leaf';
    div.innerHTML = `<img src="${imgPath}" alt="葉子">`;
    fragment.appendChild(div);
  }
  container.appendChild(fragment);

  const leaveEls = container.children;

  leaveEls.forEach((el) => {
    const target = el;
    const timeDuration = helperCryptoRandom(5, 10); // fade, move
    const timeDuration2 = helperCryptoRandom(3, 6); // rotate
    const timeDelay = helperCryptoRandom(1, 3);

    target.style.left = helperCryptoRandom(0, 600) + 'px';
    target.style.animation = `fade ${timeDuration}s ${timeDelay}s linear infinite, move ${timeDuration}s ${timeDelay}s linear infinite`;
    target.children[0].style.animation = Math.round(helperCryptoRandom(0, 1)) ? `rotate ${timeDuration2}s ease-in-out infinite alternate` : `rotate1 ${timeDuration2}s ease-in-out infinite alternate`;
  });
}
