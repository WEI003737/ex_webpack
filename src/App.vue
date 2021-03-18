<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div class="background_img"></div>
    <Test></Test>
  </div>
</template>

<script>
  import Test from '@/components/Test.vue';
  export default {
    components: {
      Test
    },
    data() {
      return {
        title: 'Hello Vue App',
      };
    },
  };
</script>

<style lang="scss">
  @import './scss/index.scss';
</style>