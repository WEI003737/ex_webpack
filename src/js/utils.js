function qs (el) {
  return document.querySelector(el);
};

function qsa (el) {
  return document.querySelectorAll(el);
};

function stripTag (str) {
  let reTag = /<[^>]+>|&[^>]+;/g;
  return str = str.replace(reTag,'').trim();
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

export {
  qs,
  qsa,
  stripTag,
  checkVal
};