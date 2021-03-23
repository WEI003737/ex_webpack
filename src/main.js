import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';

console.log('Hello Vue');

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');

/* 以上寫法等於:

new Vue({
  render: function (createElement) {
    return createElement(App);
  },
});

new Vue({
  el: '#app',
  render: (h) => h(App),
});

h 這一個參數的作用就是生成一個 VNode 節點，render 函數得到這一個 VNode 節點之後，返回給 Vue 的 mount 函數渲染成真實的 DOM 節點，並掛載到根節點上。

而為什麼取作 h 呢？它來自 hyperscript 這個單字，這個單字通常用在 Virtual DOM 的實現中。Hyperscript 本身是指生成 HTML 結構的 Script 腳本，因為 HTML 是 HyperText Markup Language 的縮寫 (超文本標記語言)。

*/