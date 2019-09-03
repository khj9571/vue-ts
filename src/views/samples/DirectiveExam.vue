<template>
  <div>
    <h1>Directive Exam</h1>

     <input id="t1" type="text" >
     <el-input ref="txt_input" placeholder="Please input" v-focusDirective></el-input>
     <el-button @click="onFocus()">Focus</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue ,Ref } from "vue-property-decorator";


@Component({
  components: {}
})
export default class DirectiveExam extends Vue {

  @Ref('txt_input') readonly button: any // HTMLButtonElement

  private onFocus() {
 
    console.log(this.button.focus())

  }

  created() {
    
  }

}
</script>
