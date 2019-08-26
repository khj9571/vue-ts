
<template>
  <el-container style="border:solid 1px; height: -webkit-fill-available;">
    <el-header>
      <main-header></main-header>
    </el-header>
    <el-container>
      <el-aside>
        <side-bar></side-bar>
      </el-aside>
      <el-container>
        <el-main>
          <div style="border:solid 1px; height:99%">
            <router-view />
          </div>
        </el-main>
        <el-footer>
          <main-footer></main-footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainHeader from "@/layouts/components/MainHeader.vue";
import MainFooter from "@/layouts/components/MainFooter.vue";
import SideBar from "@/layouts/components/SideBar.vue";

@Component({
  name: "app-main",
  components: {
    MainHeader,
    MainFooter,
    SideBar
  }
})
export default class SideMenu extends Vue {
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
<style>
.el-submenu__title {
  text-align: left;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
