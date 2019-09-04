<template>
  <div>
    <h1>Directive Exam</h1>

    <!-- <div
      style="border: solid 1px;"
      v-show="visible"
      v-colorDirective="{color: 'red', backgroundColor: 'blue'}"
    >

      Test
    </div>-->

    <div v-border>a</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";

@Component({
  components: {}
})
export default class DirectiveExam extends Vue {
  @Ref("txt_input") readonly button: any; // HTMLButtonElement

  created() {}
}
</script>
