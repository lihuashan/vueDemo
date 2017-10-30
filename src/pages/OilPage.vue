<template>
  <div>
    <Logo />
    <list-products :child-msg="dataList"/>
  </div>
</template>
<script>
  import pic3 from './../assets/pic3.png'
  import Logo from '../components/logo.vue'
  import ListProducts from '../components/ListProducts.vue'
  export default {
    components: {
      Logo,
      ListProducts
    },
    data () {
      return {
        title: 'huashan',
        dataList: [
          {type: 'OilorderList', price: '285.01', title: '20公斤东北大米', path: pic3, visible: true, comment: 120, company: '为民专营店'},
          {type: 'OilorderList', price: '205.00', title: '100公斤东北大米', path: pic3, visible: true, comment: 1020, company: '为民专营店'},
          {type: 'OilorderList', price: '685.00', title: '60公斤东北大米', path: pic3, visible: true, comment: 320, company: '为民专营店'},
          {type: 'OilorderList', price: '185.00', title: '30公斤东北大米', path: pic3, visible: true, comment: 10, company: '为民专营店'},
          {type: 'OilorderList', price: '85.00', title: '70公斤东北大米', path: pic3, visible: true, comment: 140, company: '为民专营店'}
        ]
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
