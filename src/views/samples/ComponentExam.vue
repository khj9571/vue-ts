<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-select v-model="value" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="20">
        <date-picker
           v-border
          :type="value"
          :fromDt.sync="fromDt"
          :toDt.sync="toDt"
          beforType="month"
          @dateChange:date="onDateChange($event)"
          @dateChange:month="onDateChange($event)"
          @dateChange:dateRange="onDateChange($event)"
          @dateChange:monthRange="onDateChange($event)"
        >
          <template slot="end" slot-scope="scope">
            <el-button name="1" @click="scope.click">1</el-button>
            <el-button name="2" @click="scope.click">2</el-button>
            <el-button name="3" @click="scope.click">3</el-button>
            <el-button name="4" @click="scope.click">4</el-button>
          </template>
        </date-picker>
        <el-button @click="confirm()">확인</el-button>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <code-combo
          v-border
          v-model="comboValue"
          groupCode
          :useAll="true"
          @change="onComboChage($event)"
          @dataSelected="onDateSelected($event)"
        />
        {{this.comboValue}}
        <el-input style="display:inline" v-model="groupCode"></el-input>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <group-code-combo v-border>
          <template slot="content" slot-scope="scope">
            <code-combo v-model="val1" :useAll="true" @dataSelected="scope.change($event,'1')" />
            <code-combo
              :groupCode="scope.groupCodeA"
              v-model="val2"
              :useAll="true"
              @dataSelected="scope.change($event,'2')"
            />
            <code-combo
              v-model="val3"
              :groupCode="scope.groupCodeB"
              :useAll="true"
              @dataSelected="scope.change($event,'3')"
            />
            <code-combo
              v-model="val4"
              :groupCode="scope.groupCodeC"
              :useAll="true"
              @dataSelected="scope.change($event,'4')"
            />
            <code-combo v-model="val5" :groupCode="scope.groupCodeD" :useAll="true" />
          </template>
        </group-code-combo>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DatePicker from "@/components/common/DatePicker.vue";
import CodeCombo from "@/components/common/CodeCombo.vue";
import GroupCodeCombo from "@/components/common/GroupCodeCombo.vue";
import { map, meanBy } from "lodash";
// code-combo
@Component({
  components: {
    DatePicker,
    CodeCombo,
    GroupCodeCombo
  }
})
export default class ComponentExam extends Vue {
  private value = "daterange";

  private fromDt: any = this.$moment("20200220").toDate();

  private toDt: any = this.$moment("20210220").toDate();

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

  private comboValue = "4";

  private groupCode = "";

  private val1 = "";
  private val2 = "1";
  private val3 = "2";
  private val4 = "1";
  private val5 = "2";
  confirm() {
    console.log("확인");
    console.log(this.fromDt);
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

    this.comboValue = "4";
    this.groupCode = "444";

   

   var arr= [{age:10},{age:20},{age:5}];

   var ob = meanBy(arr,(d)=> d.age);

   console.log('ob');
   console.log(ob);

  }

  onDateChange(data: any) {
    console.log(data);
  }

  onComboChage(data: any) {
    console.log("onComboChage");
    console.log(data);
  }

  onDateSelected(evt: any) {
    console.log(evt);
  }
}
</script>
