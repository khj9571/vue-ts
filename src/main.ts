import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ko';

import axios from 'axios'
import VueAxios from 'vue-axios'
import 'expose-loader?$!expose-loader?jQuery!jquery'
// c:/Vue/새 폴더/vue-ts/node_modules/v-mask/dist/v-mask.js
// import VueMask from 'v-mask'
// Vue.use(VueMask);


import GloblePlugin from './plugins/app'

Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'))

Vue.config.productionTip = false
Vue.use(Element,{locale})
Vue.use(GloblePlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
