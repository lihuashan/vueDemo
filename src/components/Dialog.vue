<template>
  <transition name='fade'>
    <div class="alert" v-if="showAlert">
      <div class="wrap">
        <div class="head">{{showAlertSub ? title:'扫二维码支付'}}</div>
        <div class="body" v-if="showAlertSub">
          <slot>
            <div class="itemBox">
              产品名称：<span class="itemText">{{message.title}}</span>
            </div>
            <div class="itemBox">
              单价：<span class="itemText colorRed">{{message.price}}</span>
            </div>
            <div class="itemBox">
              购买数量：<span class="itemText"><input placeholder="请输入购买数量" v-model.number="num" type="number"  style="text-align: right;border: 0;outline: none;"></span>
            </div>
            <div class="itemBox">
              购买总金额：<span class="itemText colorRed">{{total}}</span>
            </div>
            <div class="itemBox">
              收货人名称：<span class="itemText"><input placeholder="请输入收货人名称" v-model="name" style="text-align: right;border: 0;outline: none;"></span>
            </div>
            <div class="itemBox">
              收货人电话：<span class="itemText"><input placeholder="请输入收货人电话号码" v-model="phone" style="text-align: right;border: 0;outline: none;"></span>
            </div>
            <div class="itemBox">
              收货人详细地址：<span class="itemText"><input placeholder="请输入收货人详细地址" v-model="address" style="text-align: right;border: 0;outline: none;"></span>
            </div>
          </slot>
        </div>
        <div class="body" v-else style="text-align: left;display: inline-block;">
          <img src='./../assets/zhifubao.png' width="300" style=""/>
          <img src='./../assets/weixinzhifu.png' width="300" style="margin-left:20px;"/>
        </div>
        <div class="foot" style="clear: both;margin-top: 20px;">
          <div  v-if="showAlertSub">
            <div v-if="type === 'confirm'">
              <button class="btn-base" @click="sure">确定</button>
              <button class="btn-gray" @click="cancel">取消</button>
            </div>
            <div v-else-if="type === 'inform'">
              <button class="btn-base" @click="cancel">知道了</button>
            </div>
          </div>
          <div v-else>
            <div class="yellowBtn" @click="jumpTo()">支付完成</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  /* eslint-disable no-unused-expressions */
  export default {
    name: 'alert',
    data () {
      return {
        showAlert: false,
        showAlertSub: true,
        num: 1,
        name: '',
        phone: '',
        address: ''
      }
    },
    props: {
      title: {
        type: String,
        default: '填写订单'
      },
      message: {
        type: null
      },
      type: { // 可以有confirm, 和inform两个类型
        type: String,
        default: 'confirm',
        validator (value) {
          return value === 'confirm' || value === 'inform'
        }
      },
      sureBtn: {
        type: Function
      },
      cancelBtn: {
        type: Function
      },
      context: {
        type: Object
      }
    },
    methods: {
      cancel () {
        if (this.cancelBtn) {
          this.cancelBtn.apply(this.context)
        }
        this.close()
      },
      sure () {
        if (this.sureBtn) {
          this.sureBtn.apply(this.context)
        }
        if (!this.name) { return }
        if (!this.phone) { return }
        if (!this.address) { return }
        this.showAlertSub = false
      },
      show () {
        this.showAlert = true
      },
      close () {
        this.showAlert = false
      },
      jumpTo (to) {
        let date = new Date()
        let [_year, _month, _date, _day, _hh, _mm, _ss] = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getDay(), date.getHours(), date.getMinutes(), date.getSeconds()]
        let formatDate = []
        let formatTime = []
        let processDate = (value) => { return value < 10 ? '0' + value : value }
        let [Sun, Mon, Tues, Wed, Thur, Fri, Sat] = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        let processDay = (value) => { return value === 0 ? Sun : value === 1 ? Mon : value === 2 ? Tues : value === 3 ? Wed : value === 4 ? Thur : value === 5 ? Fri : Sat }
        _month = processDate(_month)
        _date = processDate(_date)
        _mm = processDate(_mm)
        _ss = processDate(_ss)
        _day = processDay(_day)
        formatDate.push(_year, _month, _date)
        formatTime.push(_hh, _mm, _ss)
        let formatDateString = formatDate.join('-') + ' ' + formatTime.join(':') + ' ' + _day
        let params = {
          message: this.message,
          num: this.num,
          total: this.total,
          name: this.name,
          phone: this.phone,
          address: this.address,
          date: formatDateString
        }
        this.close()
        this.$emit('listenToChildEvent', params)
      }
    },
    computed: {
      total: function () {
        this.num >= 0 ? this.num : this.num = 1
        return this.num * this.message.price
      }
    }

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alert {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0, 0.8);
    z-index: 1000;
    transition: all .1s ease-in-out;
  }
  .wrap {
    position: absolute;
    z-index: 1002;
    min-width: 600px;
    background: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
  }
  .head {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #dedede;
    padding-left: 10px;
    color: #333;
  }
  .body {
    padding: 10px 20px 5px;
    text-align: center;
  }
  .itemBox {
    padding: 10px 10px;
    margin: 0 0 10px 0;
    border: 1px solid #ccc;
    text-align: left;
  }
  .itemText {
    float: right;
    font-size: 14px;
    color: #ccc;
  }
  .colorRed {
    color: #f00;
  }
  .foot {
    height: 50px;
    text-align: center;
  }
  .foot button {
    margin-right: 20px;
  }
  .yellowBtn {
    width: 216px;
    padding: 15px 0;
    margin: 0 auto;
    background: #f4b70f;
  }
</style>
