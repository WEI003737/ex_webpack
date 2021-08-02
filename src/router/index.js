import Vue from 'vue';
import VueRouter from 'vue-router';
import ShowComponent from '@/components/page/ShowComponent.vue'; //靜態載入

Vue.use(VueRouter);

const routers = new VueRouter({
  routes: [
    {
      path: '/ShowComponent',
      name: 'ShowComponent',
      component: ShowComponent,
    },
    {
      path: '/ShowStyle',
      name: 'ShowStyle',
      component: () => import(/* webpackChunkName: "Test2" */ '@/components/page/ShowStyle'), //動態載入
    },
  ],
})

export default routers;