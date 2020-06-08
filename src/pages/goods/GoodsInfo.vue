<template>
  <div>商品详情</div>
</template>
<script>
export default {
  props: ['id'],
  created () {
    this.getGoodsInfo()
  },
  methods: {
    getGoodsInfo () {
      window.console.log(this.id)
    }
  }
}
</script>
