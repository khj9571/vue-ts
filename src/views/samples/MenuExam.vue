<template>
  <div>
    <h1>Menu Exam</h1>
    <el-row>
      <el-col :span="6">
        <el-menu default-active="2" @open="handleOpen" @close="handleClose">
          <side-bar-item v-for="(item , idx) in menuItems" :key="idx" :item="item" :index="idx + 1"></side-bar-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBarItem from "@/layouts/components/SideBarItem.vue";

@Component({
  components: {
    SideBarItem
  }
})
export default class MenuExam extends Vue {
  private menuItems = [
    {
      title: "메뉴1",
      index: "1",
      children: [
        {
          title: "메뉴 1-1",
          index: "1-1",
          children: [
            {
              title: "메뉴 1-1-1",
              index: "1-1-1"
            },
            {
              title: "메뉴 1-1-2",
              index: "1-1-2"
            },
            {
              title: "메뉴 1-1-3",
              index: "1-1-3"
            }
          ]
        },
        {
          title: "메뉴 1-2",
          index: "1-2",
          children: [
            {
              title: "메뉴 1-2-1",
              index: "1-2-1"
            },
            {
              title: "메뉴 1-2-2",
              index: "1-2-2"
            }
          ]
        }
      ]
    },
    {
      title: "메뉴2",
      index: "2",
      children: [
        {
          title: "메뉴 2-1",
          index: "2-1",
          children: [
            {
              title: "메뉴 2-1-1",
              index: "2-1-1"
            },
            {
              title: "메뉴 2-1-2",
              index: "2-1-2"
            },
            {
              title: "메뉴 2-1-3",
              index: "2-1-3"
            }
          ]
        },
        {
          title: "메뉴 2-2",
          index: "2-2",
          children: [
            {
              title: "메뉴 2-2-1",
              index: "2-2-1"
            },
            {
              title: "메뉴 2-2-2",
              index: "2-2-2"
            }
          ]
        }
      ]
    },{
      title:'메뉴 3'
    }
  ];

  handleOpen(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  handleClose(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
}
</script>

