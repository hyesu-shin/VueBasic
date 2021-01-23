import Vue from 'vue'
import App from './App.vue'
// vue 라우터 사용
import router from './router/index.js'
//vue-cookies 사용
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
