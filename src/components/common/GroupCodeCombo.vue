<template>
  <div class="groupCodeComboBox">
    <slot
      name="content"
      :change="codeChanged"
      :groupCodeA="groupCodeA"
      :groupCodeB="groupCodeB"
      :groupCodeC="groupCodeC"
      :groupCodeD="groupCodeD"
    ></slot>
  </div>
</template>


<style scoped>
.groupCodeComboBox {
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

@Component({
  name: "group-code-combo"
})
export default class GroupCodeCombo extends Vue {
  //  private codeChanged(evt:any) {
  //    console.log(evt);
  //  }

  groupCodeA: string = "";

  groupCodeB: string = "";

  groupCodeC: string = "";

  groupCodeD: string = "";

  codeChanged(data: any, idx: any) {
    if (idx == undefined || idx == null) return;

    if (idx == 1) {
      this.groupCodeA = data.value;
    } else if (idx == 2) {
      this.groupCodeB = data.value;
    } else if (idx == 3) {
      this.groupCodeC = data.value;
    } else if (idx == 4) {
      this.groupCodeD = data.value;
    }
  }
}
</script>