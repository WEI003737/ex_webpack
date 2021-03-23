<template>
  <div class="model">
    <p>{{ modelText }}</p>
    <p>{{ title }}</p>
    <div class="background_img"></div>
    <p>Vuex: {{ count }}</p>
    <button @click="add()">add</button></div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data () {
    return {
      modelText: 'this is test model, I\'m a component',
      title: 'Hello Vue App',
    }
  },
  computed: {
    ...mapState(['count']),
    // count () {
    //   return this.$store.state.count;
    // }
  },
  methods: {
    ...mapMutations(['add']),
  }
}
</script>

<style scoped>
.model{
  color: rebeccapurple;
  font-size: 45px;
}
</style>