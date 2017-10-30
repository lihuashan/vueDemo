<template>
  <div>
    <Logo />
    <convenient-navigation />
  </div>
</template>
<script>
  import Logo from '../components/logo.vue'
  import ConvenientNavigation from '../components/ConvenientNavigation.vue'
  export default {
    components: {
      Logo,
      ConvenientNavigation
    },
    data () {
      return {
        title: 'huashan'
      }
    },
    methods: {
      goback (num) {
        if (this.$router) {
          this.$router.go(num)
        }
      }
    }
  }
</script>
