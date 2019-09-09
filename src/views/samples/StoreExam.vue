<template>
   <div>
      <h1>Store Exam</h1>
      <el-row>
          <el-col>
              <el-button @click="onClick()">
                  Store Call
              </el-button>
          </el-col>
          <el-col>
              {{label}}
          </el-col>
      </el-row>     
  </div> 
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";

@Component({
  components: {}
})
export default class StoreExam extends Vue {

  @Action("incr", { namespace: "b" }) incr: any;
  @Getter("label", { namespace: "b" }) label: any;

  onClick() {
      this.incr();
  }

}
</script>
