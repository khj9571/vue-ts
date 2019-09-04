<template>
  <div style="height:100%">
    <h1>Table Exam</h1>
    <el-button @click="onClick()">클릭</el-button>
    <el-date-picker type="date" placeholder="Pick a day"></el-date-picker>

    <input
      class="u-full-width"
      id="us-phone-number-ex"
      type="text"
      placeholder="+1(999)-999-9999"
      v-mask="'(###)-###-####'"
      v-model="a"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GroupMixin } from "@/mixins/GroupMixin";
import { mixins } from "vue-class-component";

// import colorDirective from '@/directives/color-directive';
//  import {mask} from 'vue-the-mask';
@Component({
  components: {
    // SideMenu
  },
  directives: {
    // colorDirective
  }
})
export default class TableExam extends mixins(GroupMixin) {
  private visible: boolean = true;
  private a: string = "123";

  onClick() {}

  created() {}
  mounted() {
    //     let str:string = '[aabcdd]';
    // alert(str.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi,""))
  }
}
</script>
