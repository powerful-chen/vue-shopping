import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from './pages/Home.vue'
import Category from './pages/Category.vue'
import Shopcart from './pages/Shopcart.vue'
import User from './pages/User.vue'
import Login from './pages/user/Login.vue'

var router = new VueRouter({ // 创建路由实例对象router
  routes: [
    { path: '/', redirect: '/home', meta: { title: '首页' } },
    { path: '/home', component: Home, name: 'home', meta: { title: '首页' } },
    { path: '/category', component: Category, name: 'category', meta: { title: '分类' } },
    { path: '/shopcart', component: Shopcart, name: 'shopcart', meta: { title: '购物车' } },
    { path: '/user', component: User, name: 'user', meta: { title: '我的' } },
    { path: '/user/login', component: Login, name: 'login', meta: { title: '登录' } },
  ],
  linkActiveClass: 'mui-active'

})
  router.beforeEach((to, from, next) => {
    if(to.meta.title){
        document.title=to.meta.title
    }
    next()
})

export default router     // 暴露路由对象属性
