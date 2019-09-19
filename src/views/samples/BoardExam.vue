<template>
  <div>
    <h1>Board</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class BoardExam extends Vue {
  created() {}

  mounted() {
    console.log(Vue.fnNullCheck(1));
    console.log(Vue.fnNullCheck(undefined));
    console.log(Vue.fnNullCheck(null));
    console.log(Vue.fnNullCheck(100));
    console.log(Vue.fnNullCheck({}));
  }
}
</script>
