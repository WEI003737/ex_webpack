<template>
  <div id="app">
    <Header></Header>

    <router-view></router-view>
    
  </div>
</template>

<script>
  import Header from '@/components/component/Header.vue';
  
  export default {
    components: {
      Header
    },
  };
</script>

<style lang="scss">
  @import '@/scss/layout/variable.scss';
  @import '@/scss/layout/keyframe.scss';
  @import '@/scss/layout/mixin.scss';
  @import '@/scss/index.scss';
</style>