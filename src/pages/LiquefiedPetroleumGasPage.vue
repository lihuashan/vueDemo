<template>
  <div>
    <Logo />
    <list-products :child-msg="dataList"/>
  </div>
</template>
<script>
  import pic from './../assets/pic.png'
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
          {type: 'LiquefiedOrderList', price: '285.01', title: '煤气罐 液化气罐 煤气钢瓶 液化气钢瓶 煤气灶 30KG瓶气瓶', path: pic, visible: true, comment: 120, company: '为民燃气专营店'},
          {type: 'LiquefiedOrderList', price: '205.00', title: '煤气罐 液化气罐 煤气钢瓶 液化气钢瓶 煤气灶 15KG瓶气瓶', path: pic, visible: true, comment: 1020, company: '为民燃气专营店'},
          {type: 'LiquefiedOrderList', price: '685.00', title: '煤气罐 液化气罐 煤气钢瓶 液化气钢瓶 煤气灶 45KG瓶气瓶', path: pic, visible: true, comment: 320, company: '为民燃气专营店'},
          {type: 'LiquefiedOrderList', price: '185.00', title: '煤气罐 液化气罐 煤气钢瓶 液化气钢瓶 煤气灶 105KG瓶气瓶', path: pic, visible: true, comment: 10, company: '为民燃气专营店'},
          {type: 'LiquefiedOrderList', price: '85.00', title: '煤气罐 液化气罐 煤气钢瓶 液化气钢瓶 煤气灶 5KG瓶气瓶', path: pic, visible: true, comment: 140, company: '为民燃气专营店'}
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
