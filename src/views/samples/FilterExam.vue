<template>
  <div>
    <h1>Filter Exam</h1>
    <!-- <p>첫 글자 대무자 변환 (kim) => {{'kim' | uppercaseFirst}}</p>
    <p>특수 문자 제거 (123*456&7(*@9#10)=> {{'123*456&7(*@9#10' | removeSpecialChar}}</p>
    <p>천 단위 콤마 (100000000000)=> {{'100000000000' | toThousand}}</p>
    <p>날짜 형식 (Date 객체)) => {{new Date() | toDate }}</p>
    <p>날짜 형식 (Date 객체)) => {{'20170212' | toDate }}</p>
    <p>억단위 표시 (1000000000) => {{ 1000000000| oneHunderdthound }}</p>
    <p>억단위 표시 (140000000) => {{ 140000000| oneHunderdthound }}</p>
    <p>억단위 표시 (50000000) => {{ 50000000|| oneHunderdthound }}</p>
    <p>억단위 표시 (10000000) => {{ 10000000 | oneHunderdthound }}</p>
    <p>억단위 표시 (5000000) => {{ 5000000 | oneHunderdthound }}</p>
    <p>억단위 표시 (3270000) => {{ 3270000 | oneHunderdthound(3) }}</p> -->

    <el-table :data="filters" border>
      <el-table-column label="필터명" prop="name"></el-table-column>
      <el-table-column label="설명" prop="explain"></el-table-column>
      <el-table-column label="값" prop="ogrData"></el-table-column>
      <el-table-column label="필터 적용">
        <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.ogrData | Vue.filters(scope.row.name)}}</span>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class FilterExam extends Vue {
  private filters = [
    { name: "uppercaseFirst", explain: "첫 글자 대문자 변환", ogrData: "jain" },
    {
      name: "removeSpecialChar",
      explain: "특수 문자 제거",
      ogrData: "(123*456&7(*@9#10)"
    },
    { name: "toThousand", explain: "천 단위 콤마", ogrData: "100000000000" },
    { name: "toDate", explain: "날짜 형식 (Date 객체))", ogrData: "Date 타입" },
    {
      name: "toDate",
      explain: "날짜 형식 (String ))",
      ogrData: "String 타입(YYYYMMDD)"
    },
    { name: "oneHunderdthound", explain: "억단위 표시", ogrData: "140000000" },
    {
      name: "oneHunderdthound",
      explain: "억단위 표시(소수점)",
      ogrData: "3270000"
    }
  ];

  created() {}
}
</script>
