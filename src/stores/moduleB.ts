import { Module } from 'vuex';

export const profile: Module<any, any> = {
  namespaced:true,
 
   actions: {
     // [Constant.ADD_TODO]: ({ state, commit }, payload) => { console.log("###addTodo!!!"); commit(Constant.ADD_TODO, payload); },
 
     test : ({commit}) => {
       alert("call2")
     }
   }
 };