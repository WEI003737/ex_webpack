import { NODE_ENV, HOST, PUBLIC_PATH, PGW_PATH } from '../../config.js';

function imgPath (filename) {
  // console.log('function imgPath')
  // return NODE_ENV === 'production'
  //       ? `${PGW_PATH}${HOST}${PUBLIC_PATH}/static/images/${filename}`
  //       : `./static/images/${filename}`;
  return NODE_ENV === 'production'
        ? `${HOST}${PUBLIC_PATH}/static/images/${filename}`
        : `./static/images/${filename}`;
};

function rwdImgPath (filename = [], breakpoints = []) {
  // console.log('function pgwPath')
  
  let screenWidth = window.innerWidth;
  let breakpoint = screenWidth >= 1920 ? 1 : [...breakpoints, screenWidth].sort((a, b) => b - a).findIndex(point => screenWidth === point);
  
  // return NODE_ENV === 'production'
  //       ? `${PGW_PATH}${HOST}${PUBLIC_PATH}/static/images/${filename[breakpoint - 1]}`
  //       : `./static/images/${filename[breakpoint - 1]}`;
  return NODE_ENV === 'production'
          ? `${HOST}${PUBLIC_PATH}/static/images/${filename[breakpoint - 1]}`
          : `./static/images/${filename[breakpoint - 1]}`;
};

/*-- npm i smoothscroll-polyfill@0.4.4 --*/
// function scrollTo (move) {
//   window.scrollTo({ 
//     top: move, 
//     behavior: 'smooth'
//   });
// }

export {
  imgPath,
  rwdImgPath,
  // scrollTo
};