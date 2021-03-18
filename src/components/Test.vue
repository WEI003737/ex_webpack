<template>
  <div class="model">{{ modelText }}</div>
</template>

<script>
export default {
  data () {
    return {
      modelText: 'this is test model, I\'m a component'
    }
  }
}
</script>

<style scoped>
.model{
  color: rebeccapurple;
  font-size: 45px;
}
</style>