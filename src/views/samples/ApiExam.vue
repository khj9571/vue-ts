
<template>
  <div>
    <h1>Api Test</h1>

    <el-row>
      <el-button @click="onGetHttpService()">Get</el-button>
      <el-button @click="onPostHttpService()">Post</el-button>
      <el-button @click="onAllHttpService()">Multi Api</el-button>
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
    this.$restApiService.httpGetService('http://localhost:9090/getTest').then((res) => {
         
         console.log('성공');
         console.log(res)
    },(err) => {

    });
  }

  private onPostHttpService() {
    this.$restApiService.httpPostService('http://localhost:9090/postTest').then((res) => {         
         console.log('성공');
         console.log(res)
    },(err) => {

    });
    
  }

  private onAllHttpService() {

     var serviceA =  this.$restApiService.httpGetService('http://localhost:9090/getTest');
     var serviceB = this.$restApiService.httpGetService('http://localhost:9090/getTest');
     var serviceC = this.$restApiService.httpPostService('http://localhost:9090/postTest');
    
    this.$restApiService.all([serviceA,serviceB,serviceC]).then((res) => {
         
         console.log("All 호출")
         console.log(res);

    });
  }

  created() {}
  mounted() {}
}
</script>
