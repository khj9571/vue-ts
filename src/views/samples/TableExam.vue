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

           <!-- <input  type="text" placeholder="27/10/2016 23:15"
                   v-mask="'##/##/#### ##:##'"
                   v-model="t"
            /> -->
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
  directives:{
    // colorDirective
  }
})
export default class TableExam extends mixins(GroupMixin) {
  
  private a:string ='';

  created() {
   
  }
  mounted() {
    //     let str:string = '[aabcdd]';
    // alert(str.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi,""))
  }
}
</script>
