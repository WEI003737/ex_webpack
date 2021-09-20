<template>

  <div class="c-header">
    <router-link class="c-header__link" to="/">Home</router-link>
  </div>
    
</template>

<script>
  import ProgressBarCircular from '../component/ProgressBarCircular.vue';

  export default {
    components: {
      ProgressBarCircular
    },
  computed: {
    // ...mapState(['count']),
    // count () {
    //   return this.$store.state.count;
    // }
  },
  methods: {
    // ...mapActions(['increment']),
  }
}
</script>

<style lang="scss" scoped>

$blue: #051E2D;

.c-header{
  height: 40px;
  background: $blue;
  &__link{
    margin: auto 20px;
    color: #fff;
    line-height: 40px;
  }
}
</style>