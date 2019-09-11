<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>-->

  <div>AAAA</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { cloneDeep } from "lodash";

import { mapActions } from "vuex";
import { State, Action, Getter } from "vuex-class";
// const namespace: string = 'b'
const str: string = "a";
@Component({
  components: {
    HelloWorld
  },
  computed: {
    // ...mapActions(["test"])
  }
})
export default class Home extends Vue {
  // @State('profile') profile: ProfileState;
  // @Action('fetchData', { namespace }) fetchData: any;
  // @Getter('fullName', { namespace }) fullName: string

  @Action("incr", { namespace: "b" }) fetchData: any;

  created() {}

  mounted() {

    // this.$store.dispatch("test");

    // this.fetchData();

    // let str: string = "[aabcdd]";
    // alert(
    //   str.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, "'")
    // );
  }
}
</script>
