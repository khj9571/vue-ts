<template>
  <div class="datePicker-box">
    <el-date-picker
      :type="type"
      v-model="value"
      :editable="false"
      :clearable="false"
      @change="onDateChange($event)"
    ></el-date-picker>
    <div style="display:inline-block">
      <slot name="end" :click="onEndGroupClick"></slot>
    </div>
  </div>
</template>


<style>

.datePicker-box {
  padding: 2px;
  /* border: solid 1px #dbdbdb; */
  display: inline-block
}

.el-range-input {
  width: 80px !important;
}

.el-input__inner {
  width: 140px !important;
}

.el-range-editor {
  width: fit-content !important;
}

.el-date-editor {
  width: fit-content !important;
}
</style>



<script lang="ts">
import { Component, Vue, Prop, PropSync, Watch } from "vue-property-decorator";
import { cloneDeep, map } from "lodash";

//   @('name', { type: String }) syncedName!: string
enum DateType {
  DATE = "date",
  MONTH = "month",
  DATE_RANGE = "daterange",
  MONTH_RANGE = "monthrange"
}

// DATECHANGE: "dateChange:date",
// DATEWEEKCHANGE: "dateChange:week",
// DATEMONTHCHANGE: "dateChange:month",
// DATERANGECHANGE: "dateChange:range"

enum DatePickerEvent {
  DATE_CHAGE = "dateChange:date",
  MONTH_CHAGE = "dateChange:month",
  DATE_RANGE_CHANGE = "dateChange:dateRange",
  MONTH_RANGE_CHANGE = "dateChange:monthRange"
}

enum BeforType {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year"
}

@Component({
  name: "date-picker"
})
export default class DatePicker extends Vue {
  // @Watch('child')
  // onChildChanged(val: string, oldVal: string) {}

  // @Watch('person', { immediate: true, deep: true })
  // onPersonChanged1(val: Person, oldVal: Person) {}

  // @Watch('person')
  // onPersonChanged2(val: Person, oldVal: Person) {}

  /**
   * Date Type
   */
  @Prop({ default: "date" }) readonly type!: string;

  /**
   * From Date
   */
  @PropSync("fromDt", {
    default: () => {
      return new Date();
    }
  })
  sync_fromDt!: Date;

  /**
   * to Date
   */
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
    if (val == DateType.DATE || val == DateType.MONTH) {
      this.settingDefault();
    } else if (val == DateType.DATE_RANGE) {
      this.settingDefault();
    } else if (val == DateType.MONTH_RANGE) {
      this.settingDefault();
    }
  }

  @Watch("fromDt")
  onChildChanged(val: Date, oldVal: Date) {
    console.log("날짜 변경");
  }

  /**
   * 날짜 데이터
   */
  private value: string | Date | Array<any> = "";

  /**
   * Default 날짜(현재)
   */
  private defaultDt = this.$moment().toDate();

  /**
   *
   */
  private isDefaultChanged: boolean = false;

  private beforType: string = "date";

  private settingDefault() {
    //console.log(this.$moment(this.sync_fromDt).format('YYYYMMDD'));

    if (this.sync_fromDt == null) this.sync_fromDt = this.$moment().toDate();

    if (this.sync_toDt == null) this.sync_toDt = this.$moment().toDate();

    if (this.type == DateType.DATE || this.type == DateType.MONTH) {
      this.value = this.sync_fromDt;
    } else if (
      this.type == DateType.DATE_RANGE ||
      this.type == DateType.MONTH_RANGE
    ) {
      if (!this.$moment(this.sync_fromDt).isBefore(this.sync_toDt)) {
        this.isDefaultChanged = true;
        this.sync_fromDt = cloneDeep(this.sync_toDt);

        setTimeout(() => {
          this.value = [this.sync_fromDt, this.sync_toDt];
        }, 100);
      } else {
        setTimeout(() => {
          this.value = [this.sync_fromDt, this.sync_toDt];
        }, 100);
      }
    }
  }

  onDateChange(evt: any) {
    if (this.type == DateType.DATE || this.type == DateType.MONTH) {
      this.sync_fromDt = evt;
      var date: any = this.$moment(evt).format(this.getDateFormatter);
      this.$emit(this.getDateEventType, date);
    } else if (
      this.type == DateType.DATE_RANGE ||
      this.type == DateType.MONTH_RANGE
    ) {
      [this.sync_fromDt, this.sync_toDt] = evt;
      var date: any = map(evt, d => {
        return this.$moment(d).format(this.getDateFormatter);
      });
      this.$emit(this.getDateEventType, date);
    }
  }

  onEndGroupClick(evt: any) {
    var diff_range = evt.currentTarget.name || "";
    if (diff_range == "") return;

    if (this.type == DateType.DATE || this.type == DateType.MONTH) {
      this.sync_fromDt = this.value = this.$moment()
        .subtract(diff_range, this.beforType)
        .toDate();
      var date: any = this.$moment(this.sync_fromDt).format(
        this.getDateFormatter
      );
      this.$emit(this.getDateEventType, date);
    } else if (
      this.type == DateType.DATE_RANGE ||
      this.type == DateType.MONTH_RANGE
    ) {
      this.sync_fromDt = this.$moment()
        .subtract(diff_range, this.beforType)
        .toDate();

      this.sync_toDt = this.$moment().toDate();

      setTimeout(() => {
        this.value = [this.sync_fromDt, this.sync_toDt];

        var date: any = map(this.value, d => {
          return this.$moment(d).format(this.getDateFormatter);
        });

        this.$emit(this.getDateEventType, date);
      }, 100);
    }

    // if (this.beforType == BeforType.DAY) {
    // } else if (this.beforType == BeforType.WEEK) {
    // } else if (this.beforType == BeforType.MONTH) {
    //   if (this.type == DateType.MONTH) {

    //     this.sync_fromDt = this.value = this.$moment()
    //       .subtract("month", nm)
    //       .toDate();
    //   }
    // } else if (this.beforType == BeforType.YEAR) {
    // }
  }

  // computed
  get getDateFormatter() {
    if (this.type == DateType.DATE || this.type == DateType.DATE_RANGE)
      return "YYYYMMDD";
    else if (this.type == DateType.MONTH || this.type == DateType.MONTH_RANGE)
      return "YYYYMM";
    return "";
  }

  get getDateEventType() {
    if (this.type == DateType.DATE) {
      return DatePickerEvent.DATE_CHAGE;
    } else if (this.type == DateType.MONTH) {
      return DatePickerEvent.MONTH_CHAGE;
    } else if (this.type == DateType.DATE_RANGE) {
      return DatePickerEvent.DATE_RANGE_CHANGE;
    } else if (this.type == DateType.MONTH_RANGE) {
      return DatePickerEvent.MONTH_RANGE_CHANGE;
    }
    return "";
  }

  constructor() {
    super();
    console.log("생성자");
    this.beforType = this.$attrs.beforType || "date";
  }

  created() {
    // console.log("생성");
    this.settingDefault();
  }

  mounted() {
    console.log("mounted");
  }
}
</script>
