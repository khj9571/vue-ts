<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

             @open="handleOpen"
              @close="handleClose"
  </div>-->
  <el-container style="border:solid 1px red; height: -webkit-fill-available;">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="300px">
        <el-row class="tac" style="padding:5px;height:100%">
          <el-col style="height:100%">
            <el-menu
            :default-openeds="['1','2','3']"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :router="true"
            >

              <el-submenu index="1">
                      <template slot="title"><i class="el-icon-menu"></i>메뉴1</template>
                      <el-menu-item>option-1</el-menu-item>
                        <el-menu-item>option-1-1-1</el-menu-item>
                        <el-menu-item>option-1-1-2</el-menu-item>
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
                        <el-menu-item index="3-1" :route="{ name:'table'}">option-2</el-menu-item>
                        <el-menu-item>option-2-1-1</el-menu-item>
                        <el-menu-item>option-2-1-2</el-menu-item>
                    </el-submenu>

              <!-- <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>Navigator One</span>
                </template>
    
                  <el-menu-item index="1-1" :route="{ name:'about'}">Menu1-1</el-menu-item>
                  <el-menu-item index="1-2" :route="{ name:'posts'}">Menu1-2</el-menu-item>

                  <el-menu-item index="1-3" :route="{ name:'child1'}">item three</el-menu-item>

                <el-submenu index="1-4">
                  <template slot="title">item four</template>
                  <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-submenu>
              </el-submenu>

              <el-submenu index="2">
                 <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>샘플</span>
                </template>
          
                  <el-menu-item index="2-1" :route="{ name:'table'}">Table</el-menu-item>
                  <el-menu-item :route="{ name:'posts'}">Menu1-2</el-menu-item>

              </el-submenu> -->
              <!-- <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span>Navigator Two</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span>Navigator Three</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span>Navigator Four</span>
              </el-menu-item> -->
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <div style="border:solid 1px; height:99%">
            <router-view />
          </div>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>


<script lang="ts">
import Vue from "vue";
export default class Home extends Vue {
  defaults = [1, 2];
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

/* body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
