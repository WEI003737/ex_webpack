<template>

  <div class="c-show-component">

    <div class="c-show-component__box">
      <p class="c-show-component__title">Progress Bar Circular</p>
      <ProgressBarCircular></ProgressBarCircular>
    </div>

  </div>
    
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProgressBarCircular from '../component/ProgressBarCircular.vue';
export default {
  components: {
    ProgressBarCircular
  },
  data () {
    return {
    }
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
.c-show-component{
  display: flex;
  justify-content: center;
  &__title{
    margin: 2rem auto;
    font-size: 30px;
    text-align: center;
  }
  &__box{
    position: relative;
  }
}
</style>