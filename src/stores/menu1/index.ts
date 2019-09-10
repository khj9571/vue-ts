import { Module } from 'vuex';

import Border from './BoardStore'


 export const module: Module<any, any> = {
   namespaced:true,
   modules:{
       a:Border
   },
   actions: {
       
     test : ({commit}) => {
        alert("call")
      }
   }
 };

 export default module