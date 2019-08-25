import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import {mo} from '@/stores'



// export const profile: Module<ProfileState, RootState> = {

// };

// export const profile: Module<any, any> = {
//  namespaced:true,

//   actions: {
//     // [Constant.ADD_TODO]: ({ state, commit }, payload) => { console.log("###addTodo!!!"); commit(Constant.ADD_TODO, payload); },

//     test : ({commit}) => {
//       alert("call2")
//     }
//   }
// };



export default new Vuex.Store({

  modules: mo,
  state: {
     test:'1'
  },
  mutations: {

  },
  actions: {
    // [Constant.ADD_TODO]: ({ state, commit }, payload) => { console.log("###addTodo!!!"); commit(Constant.ADD_TODO, payload); },

    test : ({commit}) => {
      alert("call")
    }
  }
})
