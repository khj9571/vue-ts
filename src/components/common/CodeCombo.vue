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
  border: solid 1px #dbdbdb;
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
 DATA_LOAD='dataLoad',
 DATA_SELECTED = 'dataSelected'
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
  onGroupCodeChanged(val: Date, oldVal: Date) {
   console.log('그룹코드 체인지');
   console.log(val);
  }

  @Watch("value")
  onValueChanged(val: string, oldVal: string) {
    console.log('벨류 체인지');
    this.codeValue = val;
  }


  private codeValue = this.value;

  private options: Array<any> = [];

  private selectedItem:any = {};

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
    },
    {
      value: "5",
      label: "Option5"
    }
  ];

  onChange(evt: any) {
    this.$emit("change", evt);

   var idx = this.options.findIndex(d => {
      return d.value == evt;
    });

    this.selectedItem = this.options[idx];
    this.$emit(CodeComboEvent.DATA_SELECTED,this.options[idx]);

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

  created() {

  }

  mounted() {

  }
}
</script>
