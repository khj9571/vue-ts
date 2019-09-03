import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

// c:/Vue/새 폴더/vue-ts/node_modules/v-mask/dist/v-mask.js
// import VueMask from 'v-mask'
// Vue.use(VueMask);

import GloblePlugin from './plugins/app'

Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'))



// import VueMoment from 'vue-moment'
// import moment from 'moment-timezone'

// Vue.use(VueMoment, {
//   moment,
// })

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(GloblePlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
