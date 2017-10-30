<template>
  <div>
    <img src="../assets/logo.png" class="logo">
    <div>{{ msg }}<span class="decripe">{{ decripe }}</span></div>
  </div>
</template>

<script>
  export default {
    props: {
      'msg': {
        type: [String],
        default: 'bm123'
      },
      'decripe': {
        default: '2017.10.9'
      }
    },
    methods: {
      back () {
        this.$emit('back')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    width: 100px;
    height: 100px;
  }
  .decripe{
    padding-left: 16px;
    font-size: 14px;
  }
</style>
