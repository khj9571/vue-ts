<template>
  <div>
    <el-row style="padding:5px;">
      <el-col>

        <!--545c64 E9EEF3 -->
        <el-menu
          :default-openeds="['1','2','3']"
          class="el-menu-vertical-demo"
          background-color="#545c64" 
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">메뉴1</span>
            </template>

            <el-submenu index="1">
                          <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">메뉴1 -1</span>
            </template>
            
            </el-submenu>

          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">메뉴2</span>
            </template>
            <el-menu-item>메뉴2-1</el-menu-item>
            <el-menu-item-group title="option-2-1">
              <el-menu-item>메뉴2-2</el-menu-item>
              <el-menu-item>메뉴2-3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">샘플</span>
            </template>
            <el-menu-item index="3-1" :route="{ name:'api'}">Api Exam</el-menu-item>
            <el-menu-item index="3-2" :route="{ name:'filter'}">Filter Exam</el-menu-item>
            <el-menu-item index="3-3" :route="{ name:'directive'}">Directive Exam</el-menu-item>
            <el-menu-item index="3-4" :route="{ name:'form'}">Form Exam</el-menu-item>
            <el-menu-item index="3-5" :route="{ name:'table'}">테이블 Exam</el-menu-item>
            <el-menu-item index="3-6" :route="{ name:'mask'}">Mask Exam</el-menu-item>
            <el-menu-item index="3-7" :route="{ name:'store'}">Store Exam</el-menu-item>
            <el-menu-item index="3-8" :route="{ name:'utils'}">Utils Exam</el-menu-item>
            <el-menu-item index="3-9" :route="{ name:'mixin'}">MixIn Exam</el-menu-item>
            <el-menu-item index="3-10" :route="{ name:'board'}">Board Exam</el-menu-item>
            <el-menu-item index="3-11" :route="{ name:'menu'}">Menu Exam</el-menu-item>
            <el-menu-item index="3-12" :route="{ name:'component'}">Component Exam</el-menu-item>
            <el-menu-item>option-2-1-1</el-menu-item>
            <el-menu-item>option-2-1-2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "side-menu"
})
export default class SideMenu extends Vue {
  private isCollapse: boolean = false;

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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
}
</style>
