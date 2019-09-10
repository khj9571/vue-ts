import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import Vue from 'vue'

@Module({ namespaced: true })
export default class BoardStore extends VuexModule {
  
  private count = 100;


  get label () {
    return `Lv.${this.count}`
  }


  @Mutation
   setUserData(delta: number) {
  }
  @Mutation
  decrement(delta: number) {

  }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({})
  async  getUserData() {
    const response =  await Vue.prototype.$restApiService.httpGetService("http://localhost:9090/getTest").then((res : any) => {
      this.context.commit('increment',1);
    })
  }

  @Action({ commit: 'decrement' })
  decr() {
    alert('호출')
    return 5
  }
}