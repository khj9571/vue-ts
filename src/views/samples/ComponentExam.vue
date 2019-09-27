<template>
  <div>
    <el-select v-model="value" placeholder="Select">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>

    <date-picker :type ="value" :fromDt.sync="fromDt" :toDt.sync ="toDt">
     <template v-slot:end>
        <el-button>A</el-button>
        <el-button>A</el-button>
        <el-button>A</el-button>
        <el-button>A</el-button>
    </template>
    </date-picker>
     <el-button @click="confirm()">확인</el-button>
      <el-button>A</el-button>
        <el-button>A</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DatePicker from "@/components/common/DatePicker.vue";

@Component({
  components: {
    DatePicker
  }
})
export default class ComponentExam extends Vue {

  private value ='date';

  private fromDt:any  = this.$moment('20200220').toDate();

  private toDt:any  = this.$moment('20210220').toDate()

  private options = [
    {
      value: "date",
      label: "Date"
    },
    {
      value: "month",
      label: "month"
    },
    {
      value: "daterange",
      label: "Daterange"
    },
    {
      value: "monthrange",
      label: "MonthRange"
    }
  ];

  confirm() {
    console.log('확인');
  console.log(this.fromDt)

  }
  
  // beforeRouteEnter (to, from, next) {
  //   console.log('beforeRouteEnter')
  //   next() // needs to be called to confirm the navigation
  // }

  // beforeRouteLeave (to, from, next) {
  //   console.log('beforeRouteLeave')
  //   next() // needs to be called to confirm the navigation
  // }

  mounted() {
  //  console.log('머징')
  //  console.log(this.$moment().format('YYYYMMDD'))
  //  console.log(this.$moment('20140324').format('YYYYMMDD'))
  //  console.log(this.$moment(new Date()).format('YYYYMMDD'))
  // this.fromDt =  this.$moment('20140324').toDate();
  }
}
</script>
