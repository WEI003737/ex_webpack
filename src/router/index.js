import Vue from 'vue';
import VueRouter from 'vue-router';
import Test from '@/components/Test.vue'; //靜態載入

Vue.use(VueRouter);

const routers = new VueRouter({
  routes: [
    {
      path: '/Test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/Test2',
      name: 'Test2',
      component: () => import(/* webpackChunkName: "Test2" */ '@/components/Test2'), //動態載入
    },
  ],
})

export default routers;