<template>
  <div class="c-show-style">
    <p>count: {{ count }}</p>
    <button @click="increment()">add</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['count']),
    // count () {
    //   return this.$store.state.count;
    // }
  },
  methods: {
    ...mapActions(['increment']),
  }
}
</script>

<style lang="scss" scoped>
.c-show-style{
  position: relative;
}
</style>