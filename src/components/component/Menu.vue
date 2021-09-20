<template>
  <div class="c-menu">
    <router-link class="c-menu__link" to="/ProgressBarCircular">
      Progress Bar Circular
    </router-link>
  </div>
</template>

<script>
  import ProgressBarCircular from './ProgressBarCircular.vue';

  export default {
    components: {
      ProgressBarCircular
    },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.c-menu{
  position: fixed;
  width: 200px;
  height: 100vh;
  background: #ccc;
  &__link{
    margin: auto 20px;
    color: #fff;
    line-height: 40px;
  }
}

</style>
