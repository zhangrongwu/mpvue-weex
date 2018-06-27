// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './AppH5'
import router from './router'
import wxService from './js/api/wxService'
import httpService from './js/api/httpService'
import weui from './assets/weui/weui.less'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(weui)

Vue.mixin({
  data() {
    return {
      service: '',
      router: '',
      imgSrc: ''
    }
  },
  created() {
    if (window) {
      console.log('chrome')
      this.service = httpService
      this.router = '/#'
      this.imgSrc = '../..'
    } else {
      console.log('wx')
      this.service = wxService
      this.imgSrc = '/static'
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  }
})