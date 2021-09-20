import Vue from 'vue';
import VueRouter from 'vue-router';
import ProgressBarCircular from '@/components/component/ProgressBarCircular.vue'; //靜態載入

Vue.use(VueRouter);

const routers = new VueRouter({
  routes: [
    {
      path: '/ProgressBarCircular',
      name: 'ProgressBarCircular',
      component: ProgressBarCircular,
    },
    // {
    //   path: '/ShowStyle',
    //   name: 'ShowStyle',
    //   component: () => import(/* webpackChunkName: "Test2" */ '@/components/page/ShowStyle'), //動態載入
    // },
  ],
})

export default routers;