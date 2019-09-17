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

  created() {
 
  }
  mounted() {
    //     let str:string = '[aabcdd]';
    // alert(str.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi,""))

     var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

     const rowCount = 6;
     var row = Math.ceil(arr.length/rowCount);
     var fn=(ogr:any,count:any) => {
       var pg = Math.ceil(ogr.length/count);
       var max = pg * count;
       var na = max - ogr.length;
       //console.log(count - na);
   
     }


     var na =fn(arr,6);


     var fn2 = (org:any,row:any,na:any,strart= 1):any => {
  
       if(strart > row) return ;
            console.log(strart)

       return fn2(org,row,na,++strart);
     }

     fn2(arr,row,na)


  }
}
</script>
