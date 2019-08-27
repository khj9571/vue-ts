<template>
  <div>
    <h1>Table Exam</h1>
    <h1>{{'aaaa' | uppercaseFirst}}</h1>
    <h1>{{'[aaaa]' | removeSpecialChar}}</h1>
    <h1>{{'123000000' | toThousandFilter}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GroupMixin } from "@/mixins/GroupMixin";
import { mixins } from "vue-class-component";

// import SideMenu from "@/layouts/sideMenu.vue";

@Component({
  components: {
    // SideMenu
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
