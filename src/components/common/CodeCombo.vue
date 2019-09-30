<template>
  <div class="codeComboBox">
    <el-select v-model="codeValue" @change="onChange($event)">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<style scoped>
.codeComboBox {
  padding: 2px;
  /* border: solid 1px #dbdbdb; */
  display: inline-block;
}
</style>


<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  PropSync,
  Watch,
  Model
} from "vue-property-decorator";
import { cloneDeep, map } from "lodash";

enum CodeComboEvent {
  DATA_LOAD = "dataLoad",
  DATA_SELECTED = "dataSelected"
}

@Component({
  name: "code-combo"
})
export default class CodeCombo extends Vue {
  @Model("change", { type: String, default: "" })
  value!: String;

  @Prop({ default: "" })
  readonly groupCode!: string;

  @Prop({ default: false })
  readonly useAll!: boolean;

  @Watch("groupCode")
  onGroupCodeChanged(val: any, oldVal: any) {
    console.log("그룹코드 체인지");
    console.log(val);
    var temp = [];
    if (this.useAll) {
      temp.push({
        value: "",
        label: "전체"
      });
    }

    var temp2: any = [];

    if (val == "1") temp2 = this.group1Temp;
    if (val == "2") temp2 = this.group2Temp;
    if (val == "3") temp2 = this.group3Temp;
    if (val == "4") temp2 = this.group4Temp;

    this.options = temp.concat(temp2);
  }

  @Watch("value")
  onValueChanged(val: string, oldVal: string) {
    this.codeValue = val;
  }

  private codeValue = this.value;

  private options: Array<any> = [];

  private selectedItem: any = {};

  private temp = [
    {
      value: "1",
      label: "Option1"
    },
    {
      value: "2",
      label: "Option2"
    },
    {
      value: "3",
      label: "Option3"
    },
    {
      value: "4",
      label: "Option4"
    }
  ];

  private group1Temp = [
    {
      value: "1",
      label: "Group1 -1"
    },
    {
      value: "2",
      label: "Group1 -2"
    },
    {
      value: "3",
      label: "Group1 -3"
    }
  ];

  private group2Temp = [
    {
      value: "1",
      label: "Group2 -1"
    },
    {
      value: "2",
      label: "Group2 -2"
    }
  ];

  private group3Temp = [
    {
      value: "1",
      label: "Group3 -1"
    },
    {
      value: "2",
      label: "Group3 -2"
    }
  ];

  private group4Temp = [
    {
      value: "1",
      label: "Group4 -1"
    },
    {
      value: "2",
      label: "Group4 -2"
    }
  ];

  onChange(evt: any) {
    this.$emit("change", evt);

    var idx = this.options.findIndex(d => {
      return d.value == evt;
    });

    this.selectedItem = this.options[idx];
    this.$emit(CodeComboEvent.DATA_SELECTED, this.options[idx]);
  }

  constructor() {
    super();

    console.log("CodeCombo 생성자");
    console.log(this.groupCode);

    if (this.useAll) {
      this.options.push({
        value: "",
        label: "전체"
      });
    }

    this.options = this.options.concat(this.temp);
  }

  created() {}

  mounted() {}
}
</script>
