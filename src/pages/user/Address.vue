<template>
  <div class="address-container">
    <div>收货地址列表</div>
    <div class="mod_btns fixed">
      <router-link :to="{ name: 'address_add' }" class="mod_btn">新增收货地址</router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.address-container {
  background: #eee;
  overflow: hidden;
  .mod_btn {
    font-size: 16px;
    line-height: 46px;
    height: 46px;
    text-align: center;
    background: #3884ff;
    flex: 1;
    display: block;
    color: #fff;
  }
  .mod_btns .fixed {
    display: flex;
    overflow: hidden;
  }
}
</style>
