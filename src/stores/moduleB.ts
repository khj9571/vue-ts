import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import Vue from 'vue'

@Module({ namespaced: true })
export default class Module2 extends VuexModule {
  count = 0



  get label () {
    return `Lv.${this.count}`
  }


  @Mutation
   increment(delta: number) {

    console.log('결과');
    console.log(delta);
    this.count += delta
  }
  @Mutation
  decrement(delta: number) {
    this.count -= delta
  }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({})
  async  incr() {
    const response =  await Vue.prototype.$restApiService.httpGetService("http://localhost:9090/getTest").then((res : any) => {
      console.log('성공')   
      this.context.commit('increment',1);
    })
  
 

    // .then(
    //   (res: any) => {
    //     console.log("성공");
    //     console.log(res);
    //     return 100;
    //   },
    //   (err: any) => {
        
   
    //   }
    // );


    //return 5
  }
  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: 'decrement' })
  decr() {
    return 5
  }
}