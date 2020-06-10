<template>
  <form class="mui-input-group">
    <div class="mui-input-row">
      <label class="tit">收件人</label>
      <input v-model="form.name" type="text" class="mui-input-clear" placeholder="请输入收件人姓名">
    </div>
    <div class="mui-input-row">
      <label class="tit">联系方式</label>
      <input v-model="form.tel" type="text" class="mui-input-clear" placeholder="请输入手机号">
    </div>
    <div class="mui-input-row">
      <label class="tit">所在地区</label>
      <input v-model="form.area" type="text" class="mui-input-clear" placeholder="所在地区">
    </div>
    <div class="mui-input-row">
      <label class="tit">详细地址</label>
      <input v-model="form.detail" type="text" class="mui-input-clear" placeholder="请输入详细地址">
    </div>
    <div class="mui-button-row">
      <button @click="save" type="button" class="mui-btn mui-btn-primary mui-btn-block">确认</button>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        tel: '',
        area: '',
        detail: ''
      }
    }
  },
  methods: {
    save () {
      window.console.log('确认')
    }
  }
}
</script>

<style lang="scss" scoped>
.mui-input-group .mui-button-row {
  height: auto;
}
.mui-input-clear {
  font-size: 14px;
}
.mui-input-group:before {
  list-style: none;
}
.mui-button-row {
  margin-top: 20px;
  button {
    margin: 20px 0;
    padding: 10px 0;
  }
}
.tit {
  color: #999;
}
input::-webkit-input-placeholder {
  color: #999;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #999;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #999;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #999;
}
</style>
