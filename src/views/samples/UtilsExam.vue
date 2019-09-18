<template>
  <div>
    <h1>
      Lodash Exam
      <a target="_new" href="https://lodash.com/">링크</a>
    </h1>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-button @click="onForEachClick">forEach</el-button>
      </el-col>
      <el-col :span="6">
        <el-button @click="onEveryClick">every</el-button>
      </el-col>
      <el-col :span="6">
        <el-button @click="onFilterClick">filter</el-button>
      </el-col>
      <el-col :span="6">
        <el-button @click="onMapClick">map</el-button>
      </el-col>
    </el-row>

    <h1>Moment</h1>
    <el-row :gutter="20">
      <el-col :span="6">현재 시간: {{$moment().format('YYYY-MM-DD')}}</el-col>

      <el-col :span="6">1일 전: {{$moment().subtract('1','day').format('YYYY-MM-DD')}}</el-col>

      <el-col :span="6">1달 전: {{$moment().subtract('1','month').format('YYYY-MM-DD')}}</el-col>

      <el-col :span="6">1년 전: {{$moment().subtract('1','year').format('YYYY-MM-DD')}}</el-col>
    </el-row>
    
  </div>
 

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { forEach, every, filter, map } from "lodash";
@Component({
  components: {}
})
export default class LodashExam extends Vue {
  onForEachClick = () => {
    let temp = ["홍길동", "이순신", "강감찬", "안중근"];

    forEach(temp, (d, idx) => {
      console.log("index ===> " + idx);
      console.log("item ===>  " + d);
    });
  };

  onEveryClick = () => {
    let temp = [10, 20, 15, 7];

    let res = every(temp, d => {
      return d > 5;
    });

    console.log(res);

    let temp2 = [
      { name: "홍길동", isMan: true },
      { name: "이순신", isMan: true },
      { name: "신사임당", isMan: false }
    ];

    let res2 = every(temp2, ["isMan", true]);

    console.log(res2);
  };

  onFilterClick = () => {
    let temp = [
      { name: "홍길동", isMan: true, age: 20 },
      { name: "이순신", isMan: true, age: 25 },
      { name: "신사임당", isMan: false, age: 18 }
    ];

    var res = filter(temp, d => {
      return d.age >= 20;
    });

    console.log(res);
  };

  onMapClick = () => {
    let temp = [10, 20];
    let res = map(temp, d => d * d);
    
    console.log(res);

  };
}
</script>

