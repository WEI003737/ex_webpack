import '../scss/index.scss';
import { changeText, doSomething } from './components/test';

import { NODE_ENV } from '../../config';

if (NODE_ENV === 'development') {
  //hmr
  if (module.hot) {
    module.hot.accept('./components/test', function () {
      const a = 734;  
      changeText(a);  
    });
  };
};

let b = ['Alice', 'Belly', 'Cathy'];
doSomething(b);