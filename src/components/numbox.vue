<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="num">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../lib/mui/js/mui.min.js'
export default {
  mounted () {
    mui('.mui-numbox').numbox()
  },
  methods: {
    countChanged () {
      var count = parseInt(this.$refs.num.value)
      this.$emit('count', { id: this.goodsid, count: count })
    }
  },
  props: ['initcount', 'max', 'goodsid'],
  watch: {
    'max' (newVal) {
      mui('.mui-numbox').numbox().setOption('max', newVal)
    }
  }
}
</script>
