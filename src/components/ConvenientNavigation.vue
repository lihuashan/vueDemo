<template>
  <div class="hello">
    <ul>
      <li v-for="item in items">
        <div v-bind:class="{ itemList : item.visible }" v-bind:style ="{ backgroundColor: item.color }" v-on:click="jumpTo(item.path)">
          {{ item.title }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'bm123',
      items: [
        {title: '液化石油气', path: '/LiquefiedPetroleumGasPage', color: 'blue', visible: true},
        {title: '桶装水', path: '/WaterListPage', color: 'red', visible: true},
        {title: '粮食', path: '/FoodStuffPage', color: '#d214ac', visible: true},
        {title: '油', path: '/OilPage', color: '#82820b', visible: true},
        {title: '米酒', path: '/WinePage', color: '#a57659', visible: true}
      ]
    }
  },
  methods: {
    jumpTo (to) {
      if (this.$router) {
        console.log(this.$router)
        this.$router.push(to)
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

ul {
  list-style-type: none;
  padding: 0;
  /*float: left;
  clear: both;*/
}

li {
  display: inline-block;
  margin: 5px 10px;
}

a {
  color: #42b983;
}
.itemList{
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
}
</style>
