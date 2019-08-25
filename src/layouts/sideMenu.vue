<template>
     <el-menu :default-openeds="['1','2']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>메뉴1</template>
        <el-menu-item>option-1</el-menu-item>
        <!-- <el-menu-item-group title="option-1-1"> -->
          <el-menu-item>option-1-1-1</el-menu-item>
          <el-menu-item>option-1-1-2</el-menu-item>
        <!-- </el-menu-item-group> -->
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>메뉴2</template>
        <el-menu-item>option-2</el-menu-item>
        <!-- <el-menu-item-group title="option-2-1"> -->
          <el-menu-item>option-2-1-1</el-menu-item>
          <el-menu-item>option-2-1-2</el-menu-item>
        <!-- </el-menu-item-group> -->
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>샘플</template>
        <el-menu-item>option-2</el-menu-item>
          <el-menu-item>option-2-1-1</el-menu-item>
          <el-menu-item>option-2-1-2</el-menu-item>
      </el-submenu>
    </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "side-menu"
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
