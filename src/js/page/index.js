import 'normalize.css';
import '../../sass/page/index.sass';
// import utils from '../utils';

import { NODE_ENV } from '../../../config';

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
<<<<<<< HEAD:src/js/page/index.js
}
=======
// };

/* set img src by breakpoint */
let rwdImg = qs('.kv__rwd-img--test');
rwdImg.src = rwdImgPath(['test.jpg', 'test2.jpg'], [1280, 768]);

const a = 734;  
let b = ['Alice', 'Belly', 'Cathy'];
changeText(a);
doSomething(b);
>>>>>>> e210252bf8238dcfe247cbc762e6c249cc64f521:src/js/index.js
