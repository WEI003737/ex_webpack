<template>
  <div id="app">
    <router-link class="link" to="/">Go to App</router-link>
    <router-link
      class="link"
      to="/Test">Go To Test</router-link>
    <router-link
      class="link"
      to="/Test2">Go To Test2</router-link>

    <router-view></router-view>
    
  </div>
</template>

<script>
  import Test from '@/components/Test.vue';
  import Test2 from '@/components/Test2.vue';
  export default {
    components: {
      Test,
      Test2
    },
  };
</script>

<style lang="scss">
  @import './scss/index.scss';
  .link{
    margin: 0 20px;
  }
</style>