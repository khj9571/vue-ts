<template>
  <!-- <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>-->

  <div>
    <template v-if="!item.children">
      <el-menu-item :index="item.index">{{item.title}}</el-menu-item>
    </template>

    <el-submenu v-else :index="item.index">
      <template slot="title">
        <i class="el-icon-document-checked"></i>
        <span>{{ item.title}}</span>
      </template>
      <side-bar-item v-for="(child,idx) in item.children" :key="idx" :item="child" />
    </el-submenu>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  name: "side-bar-item"
})
export default class SideBarItem extends Vue {
  //   @Prop(Number) readonly propA: number | undefined
  //   @Prop({ default: 'default value' }) readonly propB!: string
  //   @Prop([String, Boolean]) readonly propC: string | boolean | undefined

  @Prop([Object]) readonly item: Object | boolean | undefined;

  created() {
    console.log("생성");
  }

  mounted() {}
}
</script>
