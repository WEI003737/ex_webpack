import 'normalize.css';
import '../scss/index.scss';
import utils from './utils'
import { changeText, doSomething } from './components/test';

import { NODE_ENV } from '../../config';

if (NODE_ENV === 'development') {
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
};

const a = 734;  
let b = ['Alice', 'Belly', 'Cathy'];
changeText(a);
doSomething(b);