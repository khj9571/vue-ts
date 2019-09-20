<template>
  <div>
    <h1>Board</h1>
    <el-row>
      <el-col>
        <el-button @click="onClickGetBoardData()">호출</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-table style="width: 100%" :data="boardList">
        <el-table-column prop="DEPTNO" label="Date" width="180"></el-table-column>
        <el-table-column prop="EMPNO" label="Name" width="180"></el-table-column>
        <el-table-column prop="ENAME" label="Address"></el-table-column>
        <el-table-column prop="SAL" label="Address"></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";

@Component({
  components: {}
})
export default class BoardExam extends Vue {
  @Getter("getBoardList", { namespace: "menu1/board" }) boardList: any;
  @Action("getBoardData", { namespace: "menu1/board" }) getBoardData: any;

  onClickGetBoardData() {
    this.getBoardData();
  }

  created() {}

  mounted() {
    console.log("보드 시작");
    console.log(this.boardList);
  }
}
</script>
