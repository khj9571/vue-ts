
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


class Notification {

     static succes() {
        Vue.prototype.$notify({
            title: '성공',
            message: '성공적으로 처리 되었습니다.',
            type: 'error',
            position: 'bottom-right'
        });
    }

     static warning() {
        Vue.prototype.$notify({
            title: '경고',
            message: '네트워크 상태를 확인 하세요.',
            type: 'warning',
            position: 'bottom-right'
        });
    }

    static getNotificationMsg(type: NotificationType) {
     
        let resType = type;
        let msg = "성공적으로 조회 되었습니다.";
        let title ="완료";

        switch (type) {
            case NotificationType.SUCCES:
                break;
            case NotificationType.WARNING:
                title = "알림";
                msg="넷트워크 오류 입니다.";
                break;
            case NotificationType.ERROR:
                title ="오류";
                msg="시스템 오류 입니다.";
                break;
            default:
                break;
        }

        Vue.prototype.$notify({
            title: title,
            message: msg,
            type: resType,
            position: 'bottom-right'
        });
    }
}


enum NotificationType {
    SUCCES =  "success",
    WARNING = "warning",
    ERROR = "error",
}


let serviceReqLog  = (apiUrl:string,param:any) => {    
    console.log('%c%s',
            'color: red; background: white; font-size: 16px;', '--------------------------requst------------------------------');
    console.log(apiUrl)        
    console.log(param);
}

let serviceResLog  = (apiUrl:string, result:any) => {
    console.log('%c%s',
    'color: red; background: white; font-size: 16px;', '--------------------------respone------------------------------');
    console.log(apiUrl)  
    console.log(result)

}


export class HttpService implements AbstractApi {
    private loading: LoadingBar = new LoadingBar();

    httpGetService(url: string, params: any = {}, headers: any = {}, useLoading: boolean = true): Promise<any> {
        serviceReqLog(url,params);

        if (useLoading) this.loading.show();

        let resultType: NotificationType = NotificationType.SUCCES;

        return Vue.axios.get(url, { params: params, headers: headers }).then((response) => {
            // console.log(response.data);
            return new Promise(function (resolve, reject) {
                serviceResLog(url,response);
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject('');
                    resultType = NotificationType.ERROR;
                }
            })
        }, (err) => {
            resultType = NotificationType.WARNING;
            return Promise.reject('Err');

        }).finally(() => {

            if (useLoading) {
                setTimeout(() => {
                    this.loading.hide();
                }, 500);
            }

            setTimeout(() => {
                Notification.getNotificationMsg(resultType);
            }, 100);

        });
    }


    httpPostService(url: string, params: any = {}, headers: any = {}, useLoading: boolean = true): Promise<any> {

        serviceReqLog(url,params);

        if (useLoading) this.loading.show();

        return Vue.axios.post(url, params, headers).then((response) => {
            return new Promise(function (resolve, reject) {
                serviceResLog(url,response);

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