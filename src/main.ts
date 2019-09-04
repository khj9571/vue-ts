import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*********************************************************
 * element ui
 *********************************************************/
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ko';

Vue.use(Element,{locale})

/*********************************************************
 * axios
 *********************************************************/
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

/*********************************************************
 * jquery
 *********************************************************/

import 'expose-loader?$!expose-loader?jQuery!jquery'

/********************************************************
 * v-mask
 *******************************************************/
import VueMask from 'v-mask'

Vue.use(VueMask as any);

/**
 * plugin
 */

import GloblePlugin from './plugins/app'

Vue.use(GloblePlugin);
Vue.use(require('vue-moment'))
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
