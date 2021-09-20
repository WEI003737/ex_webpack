import 'normalize.css';
import '../scss/index.scss';
import { qs, rwdImgPath } from './utils'
import { changeText, doSomething } from './components/test';

import { NODE_ENV } from '../../config';

// if (NODE_ENV === 'development') {
  /*
  hmr:
  devServer hot 選項開啟
  */
  // if (module.hot) {
  //   module.hot.accept('./components/test', function () {
  //     const a = 734;  
  //     let b = ['Alice', 'Belly', 'Cathy'];
  //     changeText(a);
  //     doSomething(b);
  //   });
  // };
// };

/* set img src by breakpoint */
let rwdImg = qs('.kv__rwd-img--test');
rwdImg.src = rwdImgPath(['test.jpg', 'test2.jpg'], [1280, 768]);

const a = 734;  
let b = ['Alice', 'Belly', 'Cathy'];
changeText(a);
doSomething(b);