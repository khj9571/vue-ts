<template>
  <div>
    <h1>Mask Exam</h1>
    <el-form ref="form" label-width="120px">
      <el-form-item label="날짜:">
        <el-input v-model="bindData.date" v-mask="'####-##-##'" placeholder="yyyy-mm-dd"></el-input>
      </el-form-item>
      <el-form-item label="전화 번호:">
        <el-input v-model="bindData.phone" v-mask="'(###) ####-####'" placeholder="휴대전화 번호"></el-input>
      </el-form-item>
      <el-form-item label="우편번호:">
        <el-input v-model="bindData.zip" v-mask="'(###) ###'" placeholder="우편번호"></el-input>
      </el-form-item>
      <el-form-item label="신용카드 번호 형식:">
        <el-input v-model="bindData.card" v-mask="'####-####-####-####'" placeholder="카드"></el-input>
      </el-form-item>
      <el-form-item label="주민번호:">
        <el-input v-focus v-model="bindData.jumin"  v-mask="'######-XXXXXXX'" placeholder="번호"></el-input>
      </el-form-item>

    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class MaskExam extends Vue {
  private bindData: any = {
    date: "",
    phone: "",
    zip: "",
    card:"",
    jumin: ""
  };
}
</script>

