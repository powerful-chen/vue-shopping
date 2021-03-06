import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import axios from './axios.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import auth from './auth.js'
import VuePreview from 'vue-preview';


Vue.use(auth)
Vue.use(axios)
Vue.use(MintUI)
Vue.use(VuePreview);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
