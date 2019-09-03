
import Vue from 'vue'


interface AbstractApi {
    httpGetService(url: string, params: any, headers: any, useLoading: boolean): Promise<any>;
    // httpGetService: () => {},
    httpPostService(url: string, params: any, headers: any, useLoading: boolean): Promise<any>,
    // httpPutService:() => {},
    // httpDeleteService:( ) => {}

}


/**
* 로딩바 
*/
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


export class HttpService implements AbstractApi {
    private loading: LoadingBar = new LoadingBar();

    httpGetService(url: string, params: any = {}, headers: any = {}, useLoading: boolean = true): Promise<any> {

        if (useLoading) this.loading.show();

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


    httpPostService(url: string, params: any = {}, headers: any = {}, useLoading: boolean = true): Promise<any> {

        if (useLoading) this.loading.show();

        return Vue.axios.post(url, params, headers).then((response) => {
            return new Promise(function (resolve, reject) {
                 console.log('post 성공');
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


    all(services: Array<Promise<any>>) {

        this.loading.show();

        return Promise.all(services).then((res) => {
            return new Promise(function (resolve, reject) {
                if (res) {
                    resolve(res)
                } else {
                    reject('');
                }
            });

        }, (err) => {

        }).finally(() => {
            this.loading.hide();
        })

    }



}