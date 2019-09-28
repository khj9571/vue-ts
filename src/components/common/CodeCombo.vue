<template>
  <div style="border:solid 1px">
    <el-select v-model="codeValue" @change="onChange($event)">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

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

@Component({
  name: "code-combo"
})
export default class CodeCombo extends Vue {
  //   model: {
  //     prop: 'checked',
  //     event: 'change'
  //   },
  //   props: {
  //     // 다른 목적을 위해 `value` prop를 사용할 수 있습니다.
  //     checked: Boolean,
  //     value: String
  //   }

  @Model("change", { type: String, default: "" }) value!: String;

  private codeGroup: string = "";

  private codeValue = "";

  private options = [
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

  onChange(evt:any) {
     console.log(evt)
         
        console.log(this.codeValue)

         this.value = this.codeValue;
  }

  constructor() {
    super();

    console.log("CodeCombo 생성자");

  }

  create() {
    //this.$restApiService.httpGetService()
  }

  mounted() {}
}
</script>
