import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
 
@Module({namespaced:true})
export default class Module2 extends VuexModule {
  count = 0
 
  @Mutation
  increment(delta: number) {
    this.count += delta
  }
  @Mutation
  decrement(delta: number) {
    this.count -= delta
  }
 
  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'increment' })
  incr() {
    alert('increment')
  }
  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: 'decrement' })
  decr() {
    return 5
  }
}