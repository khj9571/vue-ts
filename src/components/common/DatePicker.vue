<template>
  <div>
    <el-date-picker :type="type" v-model="value" @change="onDateChange($event)"></el-date-picker>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync, Watch } from "vue-property-decorator";
//   @('name', { type: String }) syncedName!: string
enum DateType {
  DATE = "date",
  MONTH = "month",
  DATER_RANGE = "daterange",
  MONTH_RANGE = "monthrange"
}

@Component({
  name: "date-picker"
})
export default class DatePicker extends Vue {
  @Prop({ default: "date" }) readonly type!: string;

  @PropSync("fromDt", {
    default: () => {
      return new Date();
    }
  })
  sync_fromDt!: Date;

  @PropSync("toDt", {
    default: () => {
      return new Date();
    }
  })
  sync_toDt!: Date;

  @Watch("type")
  onTypeChanged(val: string, oldVal: string) {
    console.log("type Change");
      console.log(val);
    //  console.log(oldVal);

     




  }

  @Watch("fromDt")
  onChildChanged(val: Date, oldVal: Date) {
    console.log("날짜 변경");

    // console.log(this.$moment(this.sync_fromDt).format("YYYYMMDD"));
    // console.log(this.$moment(this.sync_fromDt).isBefore(this.sync_toDt));
    //  console.log(oldVal);
  }

  private value: string | Date | Array<any> = "";

  private defaultDt = this.$moment().toDate();

  private settingDefault() {
    //console.log(this.$moment(this.sync_fromDt).format('YYYYMMDD'));

    console.log("settingDefault");
    console.log(this.sync_fromDt);

    if (this.sync_fromDt == null) this.sync_fromDt = this.$moment().toDate();

    if (this.sync_toDt == null) this.sync_toDt = this.$moment().toDate();

    if (this.type == DateType.DATE || this.type == DateType.MONTH) {
      this.value = this.sync_fromDt;
    } else if (
      this.type == DateType.DATER_RANGE ||
      this.type == DateType.MONTH_RANGE
    ) {
      if (!this.$moment(this.sync_fromDt).isBefore(this.sync_toDt)) {
      }

      this.value = [this.sync_fromDt, this.sync_toDt];
    }
  }

  // private defaultOption = {
  //    date:{

  //    },
  //    month: {

  //    },
  //    daterange:{

  //    },

  // }

  // @Watch('child')
  // onChildChanged(val: string, oldVal: string) {}

  // @Watch('person', { immediate: true, deep: true })
  // onPersonChanged1(val: Person, oldVal: Person) {}

  // @Watch('person')
  // onPersonChanged2(val: Person, oldVal: Person) {}

  onDateChange(evt: any) {
    console.log(evt);
    this.sync_fromDt = evt;
  }

  constructor() {
    super();
    //console.log('생성자');
    // console.log(this.$moment(this.sync_fromDt).isBefore(this.toDt))
  }

  created() {
    // console.log("생성");
    this.settingDefault();
  }

  mounted() {
    //   console.log("mounted");
  }
}
</script>
