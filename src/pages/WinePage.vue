<template>
  <div>
    <Logo />
    <list-products :child-msg="dataList"/>
  </div>
</template>
<script>
  import pic4 from './../assets/pic4.png'
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
          {type: 'WineOrderList', price: '285.01', title: '20公斤檽米酒', path: pic4, visible: true, comment: 120, company: '为民燃气专营店'},
          {type: 'WineOrderList', price: '205.00', title: '10公斤檽米酒', path: pic4, visible: true, comment: 1020, company: '为民燃气专营店'},
          {type: 'WineOrderList', price: '685.00', title: '60公斤檽米酒', path: pic4, visible: true, comment: 320, company: '为民燃气专营店'},
          {type: 'WineOrderList', price: '185.00', title: '30公斤檽米酒', path: pic4, visible: true, comment: 10, company: '为民燃气专营店'},
          {type: 'WineOrderList', price: '85.00', title: '70公斤檽米酒', path: pic4, visible: true, comment: 140, company: '为民燃气专营店'}
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
