<template>
    <div class="groupCodeComboBox">
         <slot name="content" :change="codeChanged" :value1="value1">

         </slot>
    </div>  
</template>


<style scoped>
.groupCodeComboBox {
  padding: 2px;
  border: solid 1px #dbdbdb;
  display: inline-block;
}
</style>


<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  PropSync,
  Watch,
  Model
} from "vue-property-decorator";
import { cloneDeep, map } from "lodash";
import { __param } from 'tslib';

@Component({
  name: "group-code-combo"
})
export default class CodeCombo extends Vue {
  //  private codeChanged(evt:any) {
  //    console.log(evt);
  //  }

  value1:string =''

  codeChanged(data:any,idx: any)  {

    if(idx == 1) {
      this.value1 = data.value
    }
    
    console.log(idx)
      console.log(data)

  };
}
</script>