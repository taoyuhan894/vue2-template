import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/plugins/element-ui/index'
import '@/assets/css/nor.css'
import '@/assets/css/base.css'
import './plugins/components'

Vue.config.productionTip = false

// 自定义指令修改title
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
