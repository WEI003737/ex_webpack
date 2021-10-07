import axios from 'axios';

import { NODE_ENV, HOST, PUBLIC_PATH } from '../../config';

function qs (el) {
  return document.querySelector(el);
}

function qsa (el) {
  return document.querySelectorAll(el);
}

function rwdImgPath (filename = [], breakpoints = []) {
  
  let screenWidth = window.innerWidth;
  let ArrSortBreakpoints = [...breakpoints, screenWidth].sort((a, b) => b - a);
  let breakpoint = screenWidth >= ArrSortBreakpoints[0] ? 1 : ArrSortBreakpoints.findIndex(point => screenWidth === point);

  return NODE_ENV === 'production'
        ? `${PUBLIC_PATH}${HOST}${PUBLIC_PATH}/static/images${filename[breakpoint - 1]}`
        : `static/images/${filename[breakpoint - 1]}`;
        
};

function stripTag (str) {
  const reTag = /<[^>]+>|&[^>]+;/g;
  return str.replace(reTag,'').trim();
}

function checkVal (str, type = 'user') {
  let regExp;
  switch (type) {
    case 'user':
      regExp = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
      break;
    case 'mobile':
      regExp = /^09\d{8}$/;
      break;
    case 'email':
      regExp = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      break;
  }
  if (regExp.test(str)) return true;
}

function toggleClass(el, className, transitionClass) {

  let list = el.classList;
  let hasClassName = Array.from(list).some(el => el === className);
  list.add(transitionClass);
  hasClassName ? list.remove(className) : list.add(className);

};

async function getAxios (
  url,
  params = {},
  options = {}
) {
  return await axios({
    method: 'get',
    url,
    responseType: 'json',
    ...options,
  });
};

async function postAxios (
  url,
  params = {},
  options = {}
) {
  return await axios({
    method: 'post',
    url,
    data: params,
    ...options,
  });
};

export {
  qs,
  qsa,
  rwdImgPath,
  stripTag,
  checkVal,
};
