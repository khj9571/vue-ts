
<template>
  <div>
    <h1>Header Component</h1>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "main-header"
})
export default class MainHeader extends Vue {
  created() {}

  mounted() {}

  handleOpen(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  handleClose(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
}
</script>
