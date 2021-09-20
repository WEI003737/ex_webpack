<template>
  <div id="app">
    <Header></Header>
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '@/components/component/Header.vue';
  import Menu from '@/components/component/Menu.vue';
  
  export default {
    components: {
      Header,
      Menu
    },
  };
</script>

<style lang="scss">
  @import '@/scss/layout/variable.scss';
  @import '@/scss/layout/keyframe.scss';
  @import '@/scss/layout/mixin.scss';
  @import '@/scss/index.scss';
</style>