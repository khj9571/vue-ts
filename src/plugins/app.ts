
import Vue from 'vue'
import * as filters from '@/filters' // global filters
import * as directives from '@/directives'

import {HttpService} from '@/plugins/class'

import moment from "moment";

// interface AbstractApi {
//   httpGetService(url: string, params: any, headers: any, useLoading: boolean): Promise<any>;
//   // httpGetService: () => {},
//   // httpPostService: () => {

//   // },
//   // httpPutService:() => {},
//   // httpDeleteService:( ) => {}

// }



/**
 * 로딩바 
 */
// class LoadingBar {
//   loading: any;
//   show = () => {
//     this.loading = Vue.prototype.$loading({
//       lock: true,
//       text: 'Loading',
//       spinner: 'el-icon-loading',
//       background: 'rgba(0, 0, 0, 0.7)'
//     });
//   }

//   hide = () => {
//     if (this.loading) {
//       this.loading.close()
//     }

//   }
// }


// class HttpService implements AbstractApi {
//   loading: LoadingBar = new LoadingBar()
//   httpGetService(url: string, params: any = {}, headers: any = {}, useLoading: boolean = false): Promise<any> {

//     if (useLoading) {
//       this.loading.show();
//     }

//     return Vue.axios.get(url, { params: params, headers: headers }).then((response) => {
//       // console.log(response.data);
//       return new Promise(function (resolve, reject) {
//         console.log(response);
//         if (response.data) {
//           resolve(response.data);
//         } else {
//           reject('');
//         }
//       })
//     }, (err) => {
//       return Promise.reject('Err')
//     }).finally(() => {

//       if (useLoading) {

//         setTimeout(() => {
//           this.loading.hide();
//         }, 500);
//       }
//     });
//   }
// }


let getMoment = () => {Vue.prototype.$moment()}

declare module 'vue/types/vue' {
  interface Vue {
    $restApiService: HttpService;
    $moment() : moment.Moment;
  }

  interface VueConstructor {

  }
}

// declare module 'vue/types/options' {
//   interface ComponentOptions<V extends Vue> {
//     myOption?: string
//   }
// }


const GloblePlugin: any = {};

GloblePlugin.install = function (Vue: any, options: any) {

  // console.log(Vue.prototype.$moment().format('YYYYMMDD'))

  let fi: any = filters;
  Object.keys(filters).forEach(key => {
    Vue.filter(key, fi[key]);
  });

  
  let dir :any = directives;
  Object.keys(directives).forEach(key => {
     Vue.directive(key,dir[key]);
  });

  Vue.prototype.$restApiService = new HttpService();
}








export default GloblePlugin;


