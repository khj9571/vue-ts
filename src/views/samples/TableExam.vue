<template>
  <div>
    <h1>테이블 EXAM</h1>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="Date" width="180"></el-table-column>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GroupMixin } from "@/mixins/GroupMixin";
import { mixins } from "vue-class-component";

@Component({
  components: {},
  directives: {}
})
export default class TableExam extends mixins(GroupMixin) {
  private tableData: any[] = [
    {
      date: "2016-05-03",
      name: "홍길동",
      address: "서울시 동작구"
    },
    {
      date: "2016-05-02",
      name: "이순신",
      address: "서울시 금천구"
    },
    {
      date: "2016-05-04",
      name: "강감찬",
      address: "서울시 노원구"
    },
    {
      date: "2016-05-01",
      name: "신사임당",
      address: "서울시 강동구"
    }
  ];

  onClick() {}

  created() {}
  mounted() {

    var arr = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      // 8,
      // 9,
      // 10,
      // 11,
      // 12,
      // 13,
      // 14,
      // 15,
      // 16,
      // 17,
      // 18,
      // 19,
      // 20,
      // 21,
      // 22,
      // 23
    ];

    const rowCount = 6;
    var row = Math.ceil(arr.length / rowCount);
    var fn = (ogr: any, count: any) => {
      var pg = Math.ceil(ogr.length / count);
      var max = pg * count;
      var remain = max - ogr.length;
      var arr = [];
      // var i;
      // if (remain == 0) {
      //   for (i = 0; i < pg; i++) {
      //     arr.push(count);
      //   }
      // } else {
      //   for (i = 0; i < pg; i++) {
      //     if (i == pg - 1) arr.push(count -remain);
      //     else {
      //       arr.push(count);
      //     }
      //   }
      // }
      // return arr;
      //console.log(count - na);

      return count - remain;
    };

    var na = fn(arr, rowCount);

    var fn2 = (org: any, row: any, na: any, result: any, start = 1): any => {
      if (start > row) return result;
      // console.log('row ==>' + row)
      // console.log('나머지 ==>' + na)
      var i;
      var search = [];
      if (start == row && na != 0) {
        for (i = 0; i < na; i++) {
          var idx = start - 1;
          var findIdx = i * row + idx;
          search.push(findIdx);
        }
      } else {
        for (i = 0; i < rowCount; i++) {
          if (i + 1 > na) {
            var idx = start - 1;
            var findIdx = i * row + idx - (i - na);
            search.push(findIdx);
          } else {
            var idx = start - 1;
            var findIdx = i * row + idx;
            search.push(findIdx);
          }
        }
      }

      if (search.length > 0) {
        search.forEach(d => {
          result.push(org[d]);
        });
      }

       console.log(search);
        console.log("--------------------------------------------------------");
      return fn2(org, row, na, result, ++start);
    };

     fn2(arr, row, na, []);
  }
}
</script>
