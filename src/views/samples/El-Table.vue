<template>
   <div>
    <side-menu></side-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import SideMenu from "@/layouts/sideMenu.vue";

@Component({
  components:{
    SideMenu
  }
})
export default class Home extends Vue {

  created() {}

  mounted() {
  }
}
</script>
