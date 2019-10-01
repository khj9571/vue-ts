<template>
  <div>
    <h1 id="h12">Directive Exam</h1>

    <!-- <div
      style="border: solid 1px;"
      v-show="visible"
      v-colorDirective="{color: 'red', backgroundColor: 'blue'}"
    >

      Test
    </div>-->

    <div v-border="{border:true}">a</div>

    <el-input v-focus v-model="value1" ></el-input>
    
    <el-input ></el-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";


@Component({
  components: {}
})
export default class DirectiveExam extends Vue {
  @Ref("txt_input") readonly button: any; // HTMLButtonElement



   value1="";

  created() {
    var arr = [];
    for (var i = 1; i < 21; i++) {
      arr.push(i);
    }

    // console.log(arr);
    // console.log(Math.ceil(arr.length / 6));
    //1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
    //1  5  9   12  15  18
    //2  6  10  13  16  19
    //3  7  11  14  17  20
    //4  8
    var fn = (org: any, max: any, rowCount: any) => {
     // 0 ,4 ,8, 11, 14 ,17
      for (var i = 1; i < (max + 1); i++) {
          if(rowCount * i <= org.length) {
            
            var base = i * rowCount;
            for(var j=1 ; j<(rowCount +1) ; j++) {
              
              if(base > org.length) { // 24
                
              }else { // 작다
                 
                 if(i == 1) {

                   if(((6 * j) + 4) < org.length) {
           
                   }
                  
                 }
         
              }
            }

          }else {
    
          }
      
      }
    };

   fn(arr,4,6)

  }

  mounted() {

  }
}
</script>
