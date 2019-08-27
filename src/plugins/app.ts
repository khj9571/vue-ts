
import Vue from 'vue'


import * as filters from '@/filters' // global filters



interface AbstractApi {
  httpGetService(url: string, params: any, headers: any, useLoading: boolean): Promise<any>;
  // httpGetService: () => {},
  // httpPostService: () => {

  // },
  // httpPutService:() => {},
  // httpDeleteService:( ) => {}

}

class LoadingBar {

  loading: any;
  show = () => {
    this.loading = Vue.prototype.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
  }

  hide = () => {
    if (this.loading) {
      this.loading.close()
    }

  }

}



class HttpService implements AbstractApi {


  loading: LoadingBar = new LoadingBar()


  httpGetService(url: string, params: any = {}, headers: any = {}, useLoading: boolean = false): Promise<any> {

    if (useLoading) {
      this.loading.show();
    }

    return Vue.axios.get(url, { params: params, headers: headers }).then((response) => {
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

      if (useLoading) {

        setTimeout(() => {
          this.loading.hide();
        }, 500);
      }
    });
  }
}


declare module 'vue/types/vue' {
  interface Vue {
    $restApiService: HttpService;
  }
}


const GloblePlugin: any = {};





GloblePlugin.install = function (Vue: any, options: any) {

  console.log('시작')
  console.log(Vue.prototype.$moment().format('YYYYMMDD'))

  let fi: any = filters;
  Object.keys(filters).forEach(key => {
    Vue.filter(key, fi[key]);
  })




  Vue.prototype.$restApiService = new HttpService();
}








export default GloblePlugin;


