<template>
  <div>
    <h1>Table Exam</h1>
    <h1>{{'aaaa' | uppercaseFirst}}</h1>
    <h1>{{'[aaaa]' | removeSpecialChar}}</h1>
    <h1>{{'123000000' | toThousandFilter}}</h1>
    <div style="border: solid 1px;" v-colorDirective="{color: 'red', backgroundColor: 'blue'}">
         <!-- <span>Test1</span> -->
         Test
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GroupMixin } from "@/mixins/GroupMixin";
import { mixins } from "vue-class-component";

import colorDirective from '@/directives/color-directive';

@Component({
  components: {
    // SideMenu
  },
  directives:{
    colorDirective
  }
})
export default class TableExam extends mixins(GroupMixin) {
  created() {}
  mounted() {
    //     let str:string = '[aabcdd]';
    // alert(str.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi,""))
  }
}
</script>
