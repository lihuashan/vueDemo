<template>
  <div class="listStyle">
    <ul>
      <li v-for="item in childMsg" v-on:click="orderProduct(item)">
        <div v-bind:class="{ itemList : item.visible }" v-bind:style ="{ backgroundColor: '#fff' }">
          <div>
            <img :src='item.path' width="250" height="300"/>
          </div>
          <div class="textStyle">
            <h3>￥{{item.price}}</h3>
            {{item.title}}<br>
            <span class="font12">已有{{item.comment}}人评价</span><br>
            <span class="font12">{{item.company}}</span>
          </div>
        </div>
      </li>
    </ul>
    <alert ref="alert" :message='dataLists' v-on:listenToChildEvent="showFormChildData"/>
  </div>
</template>

<script>
  import alert from './Dialog.vue'
  export default {
    components: {
      alert
    },
    props: {
      childMsg: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        dataLists: null
      }
    },
    methods: {
      orderProduct (item) {
        this.$refs.alert.show()
        this.dataLists = item
        console.log(item.title, '----------------')
      },
      showFormChildData (data) {
        switch (data.message.type) {
          case 'LiquefiedOrderList':
            this.$router.push({path: '/LiquefiedOrderList', query: { data: data }})
            break
          case 'WaterOrderList':
            this.$router.push({path: '/WaterOrderList', query: { data: data }})
            break
          case 'FoodrderList':
            this.$router.push({path: '/FoodStuffOrderList', query: { data: data }})
            break
          case 'OilorderList':
            this.$router.push({path: '/OilOrderList', query: { data: data }})
            break
          case 'WineOrderList':
            this.$router.push({path: '/WineOrderList', query: { data: data }})
            break
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  h3 {
    padding: 0;
    margin: 0 0 10px 0;
    color: red;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 1240px;
    /*float: left;
    clear: both;*/
  }

  li {
    float: left;
    display: inline;
    width: 300px;
    margin: 0 5px 10px 5px;
    margin-bottom: 10px;
    border: 0px solid #333;
  }

  a {
    color: #42b983;
  }
  .listStyle{
    width: 1240px;
    margin: 0 auto;
  }
  .itemList{
    width: 300px;
    height: 420px;
  }
  .textStyle{
    padding: 0 10px;
    color: #333;
    font-size: 14px;
    text-align: left;
    line-height: 20px;
  }
  .font12 {
    color: #999;
    font-size: 12px;
  }
</style>
