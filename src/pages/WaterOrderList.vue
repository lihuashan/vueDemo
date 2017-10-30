<template>
  <div>
    <div style="width: 200px; float: left">
      <Logo />
    </div>
    <slot>
      <div style="margin-left: 210px; margin-right: 100px; background: #fff;text-align: left; border-radius: 10px;">
        <h4 style="background: #fff; margin: 0; padding:15px 0 15px 15px;">全部订单</h4>
        <div v-for="item in objData" style="border: 1px solid #aaa;padding: 10px 15px;margin-top:15px;background: #fff;line-height: 32px; position: relative;">
          <span style="color: #ccc">收货人:</span>{{item.name}}<br>
          <span style="color: #ccc">联系电话:</span>{{item.phone}}<br>
          <span style="color: #ccc">订单数量:</span>{{item.num}} <span style="color: #ccc">单价:</span>{{item.message.price}} <br>  <span style="color: #ccc">订单总金额:</span>{{item.total}} <br>
          <span style="color: #ccc">发货地址:</span>{{item.address}}<br>
          <span style="color: #ccc">订单日期:</span>{{item.date}}<br>
          <img :src='item.message.path' width="100" style="position: absolute;top: 50%; right: 20px; margin-top: -60px">
        </div>
      </div>
    </slot>
  </div>
</template>
<script>
  import Logo from '../components/logo.vue'
  import ListProducts from '../components/ListProducts.vue'
  export default {
    components: {
      Logo,
      ListProducts
    },
    data () {
      return {
        title: 'orderDetail'
      }
    },
    computed: {
      objData () {
        if (localStorage.getItem('WaterOrderList')) {
          let temp = JSON.parse(localStorage.getItem('WaterOrderList'))
          if (this.$route.query.data.name) {
            temp.unshift(this.$route.query.data)
            localStorage.setItem('WaterOrderList', JSON.stringify(temp))
          }
        } else {
          if (this.$route.query.data.name) {
            let temp = []
            temp.unshift(this.$route.query.data)
            localStorage.setItem('WaterOrderList', JSON.stringify(temp))
          }
        }
        let listArr = JSON.parse(localStorage.getItem('WaterOrderList'))
        return listArr
      }
    }
  }
</script>
