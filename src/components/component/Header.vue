<template>

  <div class="c-header">
    <router-link class="c-header__link" to="/">Home</router-link>
    <router-link
      class="c-header__link"
      to="/ShowComponent">Show Component</router-link>
    <router-link
      class="c-header__link"
      to="/ShowStyle">Show Style</router-link>
  </div>
    
</template>

<script>
  import ShowComponent from '@/components/page/ShowComponent.vue';
  import ShowStyle from '@/components/page/ShowStyle.vue';

  export default {
    components: {
      ShowComponent,
      ShowStyle
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