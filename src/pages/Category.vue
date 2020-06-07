<template>
  <div>
    <div class="menu">
      <div class="menu-left" ref="itemList">
        <ul>
          <li class="menu-item" v-for="(menu,index) in menus" :key="index" :class="{current: index === currentIndex}"
            @click="clickList(index)">
            <p class="text">{{ menu.name }}</p>
          </li>
        </ul>
      </div>
      <div class="menu-right">
        <ul>
          <li class="cate" v-for="(menu, index1) in menus" :key="index1">
            <h4 class="cate-title">{{ menu.name }}</h4>
            <ul class="cate-item">
              <li v-for="(item, index2) in menu.sub" :key="index2">
                <a href="#" class="cate-item-wrapper">
                  <div class="cate-item-img">
                    <img :src="item.image" alt="">
                  </div>
                  <span>{{ item.name }}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      menus: [],
      currentIndex: 0,
      rightLiTops: [],  // 右菜单每项的高度
    }
  },
  watch: {
    menus () {
      // $nextTick用来在下次DOM更新循环结束之后执行延迟回调
      this.$nextTick(() => {
        this._initBScroll()      // 初始化better-scroll
        this._initRightHeight() // 初始化右边菜单的高度
      })
    }
  },
  created () {
    this.$indicator.open({
      text: '加载中'
    })
    this.$http.get('category').then(res => {
      this.$indicator.close()
      this.menus = res.data.data
    })
  },
  methods: {
    clickList (index) {
      this.currentIndex = index
      // scrollTo(x, y, time, easing)
      this.rightBscroll.scrollTo(0, -this.rightLiTops[index])
    },
    // 初始化better-scroll
    _initBScroll () {
      this.leftBscroll = new BScroll('.menu-left', {
        click: true,
        mouseWheel: true
      })
      this.rightBscroll = new BScroll('.menu-right', {
        click: true,
        mouseWheel: true
      })
    },
    _initRightHeight () {
      let itemArray = []
      let top = 0
      itemArray.push(top)
      let allList = this.$refs.itemList.getElementsByClassName('cate')
      // 将 allList 转换为普通数组进行遍历，记录每个元素的高度
      Array.prototype.slice.call(allList).forEach(li => {
        top += li.clientHeight
        itemArray.push(top)
      })
      this.rightLiTops = itemArray
    }

  },
}
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.menu {
  display: flex;
  position: absolute;
  text-align: center;
  top: 40px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;
  .menu-left {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    .menu-item {
      height: 54px;
      width: 100%;
      .text {
        width: 100%;
        line-height: 54px;
        margin-bottom: 0;
      }
    }
    .current {
      width: 100%;
      background: #fff;
      .text {
        color: red;
      }
    }
  }
  .menu-right {
    flex: 1;
    background: #fff;
  }
}
.cate {
  height: 100%;
  .cate-title {
    margin: 0;
    text-align: left;
    font-size: 14px;
    color: #333;
    font-weight: bold;
    padding: 10px;
  }
  .cate-item {
    padding: 7px 10px 10px;
    display: flex;
    overflow: hidden;
    flex-flow: row wrap;
    li {
      width: 33.3%;
      .cate-item-wrapper {
        .cate-item-img {
          width: 100%;
          img {
            width: 70px;
            height: 70px;
          }
        }
        span {
          display: inline-block;
          font-size: 14px;
          color: #333;
        }
      }
    }
  }
}
</style>
