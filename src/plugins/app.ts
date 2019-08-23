
import Vue from 'vue'

import {test} from './restService'


interface Api {
  httpGetService: () => {},

}

declare module 'vue/types/vue' {
  interface Vue {
    $restApiService: Api;
  }
}


const GloblePlugin:any = {};


 GloblePlugin.install = function (Vue:any, options:any) {

  console.log(Vue.axios)




  Vue.prototype.$restApiService = restApiService;
}


export const restApiService = {
       httpGetService:(url:string, params:any, useLoading = false, headers = {}) =>{
        return Vue.axios.get('http://172.27.229.39/mobile/login/checkLogin', { params: params, headers: headers }).then((response) => {
          // console.log(response.data);
          return new Promise(function (resolve, reject) {
            console.log(response);
            if (response.data) {
            
              resolve(response.data);
            } else {
              reject('');
            }
          })
        }, (err) => {
          return Promise.reject('Err')
    
        }).finally(() => {
    
          // if (useLoading) {l
          //   loading.close();
          // }
        });


       }

}






export default GloblePlugin;


