import { helperQs, helperGetScrollOffset } from '@/js/utils';

let listener;
const btnScale = helperQs('.c-magnifier__scale');
const btnStop = helperQs('.c-magnifier__stop');

btnScale.addEventListener('click', magnifier, false);
btnStop.addEventListener('click', function (e) {
  const target = getTarget(e);
  const [pictureContainer, pictureBig] = [target.pictureContainer, target.pictureBig];
  pictureContainer.removeEventListener('mousemove', listener, false);
  pictureBig.style.opacity = 0;
}, false);

function getTarget (e) {
  const [currentTarget] = [e.currentTarget];
  const pictureOrigin = currentTarget.parentElement;
  const pictureContainer = pictureOrigin.parentElement;
  const pictureBig = pictureOrigin.nextElementSibling;
  const pictureBigImg = pictureBig.children[0];
  return {
    pictureOrigin,
    pictureContainer,
    pictureBig,
    pictureBigImg,
  };
}

function magnifier (e) {
  const target = getTarget(e);
  const [
    pictureOrigin,
    pictureContainer,
    pictureBig,
    pictureBigImg,
  ] = [
    target.pictureOrigin,
    target.pictureContainer,
    target.pictureBig,
    target.pictureBigImg,
  ];
  const listX = pictureContainer.offsetLeft;
  const listY = pictureContainer.offsetTop;
  const ratio = pictureBigImg.clientWidth / pictureOrigin.clientWidth;

  pictureBig.style.opacity = 1;

  const move = function (e) {
    const pageX = e.pageX || helperGetScrollOffset().left + e.clientX;
    const pageY = e.pageY || helperGetScrollOffset().top + e.clientY;

    let maskX = pageX - listX - pictureBig.offsetWidth / 2;
    let maskY = pageY - listY - pictureBig.offsetHeight / 2;

    if (maskX < -pictureBig.offsetWidth / 2) {
      maskX = -pictureBig.offsetWidth / 2;
    }
    if (maskX > pictureOrigin.offsetWidth - pictureBig.offsetWidth / 2) {
      maskX = pictureOrigin.offsetWidth - pictureBig.offsetWidth / 2;
    }
    if (maskY < -pictureBig.offsetHeight / 2) {
      maskY = -pictureBig.offsetHeight / 2;
    }
    if (maskY > pictureOrigin.offsetHeight - pictureBig.offsetHeight / 2) {
      maskY = pictureOrigin.offsetHeight - pictureBig.offsetHeight;
    }
    pictureBig.style.left = maskX + 'px';
    pictureBig.style.top = maskY + 'px';

    pictureBigImg.style.marginTop = (-ratio * maskY) - (pictureBig.offsetWidth / 4) + 'px';
    pictureBigImg.style.marginLeft = (-ratio * maskX) - (pictureBig.offsetWidth / 4) + 'px';

  };

  pictureContainer.addEventListener('mousemove', move, false);
  listener = move;
}
