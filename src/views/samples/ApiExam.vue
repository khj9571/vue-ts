
<template>
  <div style="height:100%">
    <h1>Api Test</h1>

    <el-row style="border:solid 1px; height:100%" :align="'bottom'">
      <el-col :span="8" style="border:solid 1px;">
        <el-row>
          <el-button @click="onGetHttpService()">Get</el-button>
        </el-row>
        <el-table :data="[]" border style="width: 100%;">
          <el-table-column prop="date" label="Date"></el-table-column>
          <el-table-column prop="name" label="Name"></el-table-column>
          <el-table-column prop="address" label="Address"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-button @click="onPostHttpService()">Post</el-button>
        </el-row>
        <el-table :data="[]" border style="width: 100%;">
          <el-table-column prop="date" label="Date"></el-table-column>
          <el-table-column prop="name" label="Name"></el-table-column>
          <el-table-column prop="address" label="Address"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-button @click="onAllHttpService()">Multi Api</el-button>
        </el-row>
        <el-table :data="[]" border style="width: 100%;">
          <el-table-column prop="date" label="Date"></el-table-column>
          <el-table-column prop="name" label="Name"></el-table-column>
          <el-table-column prop="address" label="Address"></el-table-column>
        </el-table>

        <el-table :data="[]" border style="width: 100%;">
          <el-table-column prop="date" label="Date"></el-table-column>
          <el-table-column prop="name" label="Name"></el-table-column>
          <el-table-column prop="address" label="Address"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ApiExam extends Vue {
  private onGetHttpService() {
    this.$restApiService.httpGetService("http://localhost:9090/getTest").then(
      res => {
        console.log("성공");
        console.log(res);
      },
      err => {}
    );
  }

  private onPostHttpService() {
    this.$restApiService.httpPostService("http://localhost:9090/postTest").then(
      res => {
        console.log("성공");
        console.log(res);
      },
      err => {}
    );
  }

  private onAllHttpService() {
    var serviceA = this.$restApiService.httpGetService(
      "http://localhost:9090/getTest"
    );
    var serviceB = this.$restApiService.httpGetService(
      "http://localhost:9090/getTest"
    );
    var serviceC = this.$restApiService.httpPostService(
      "http://localhost:9090/postTest"
    );

    this.$restApiService.all([serviceA, serviceB, serviceC]).then(res => {
      console.log("All 호출");
      console.log(res);
    });
  }

  created() {}
  mounted() {}
}
</script>
