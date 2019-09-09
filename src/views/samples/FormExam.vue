<template>
  <div>
    <h1>Form Exam</h1>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="이름:" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="지역" prop="region">
        <el-select v-model="ruleForm.region" placeholder="지역">
          <el-option label="서울" value="seuol"></el-option>
          <el-option label="부산" value="busan"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="시간" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="날짜 선택"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="시간 선택" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="취미 선택" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="1" name="type">축구</el-checkbox>
          <el-checkbox label="2" name="type">야구</el-checkbox>
          <el-checkbox label="3" name="type">영화</el-checkbox>
          <el-checkbox label="4" name="type">게임</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="성별" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="1">남자</el-radio>
          <el-radio label="2">여자</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="비고" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>

     {{ruleForm}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";

@Component({
  components: {}
})
export default class FormExam extends Vue {

@Ref('ruleForm') readonly form :any;

  private ruleForm: any = {
    name: "",
    region: "",
    date1: "",
    date2: "",
    delivery: false,
    type: [],
    resource: "",
    desc: ""
  };

  private rules: any = {
    name: [
      {
        required: true,
        message: "이름을 입력해 주세요.",
        trigger: "blur"
      },
      { min: 3, max: 5, message: "최소 3글자 최대 5글자", trigger: "blur" }
    ],
    region: [
      {
        required: true,
        message: "지역을 선택해 주세요",
        trigger: "change"
      }
    ],
    date1: [
      {
        type: "date",
        required: true,
        message: "날짜를 선택해 주세요.",
        trigger: "change"
      }
    ],
    date2: [
      {
        type: "date",
        required: true,
        message: "시간을 선택해 주세요.",
        trigger: "change"
      }
    ],
    type: [
      {
        type: "array",
        required: true,
        message: "취미를 선택해 주세요",
        trigger: "change"
      }
    ],
    resource: [
      {
        required: true,
        message: "성별을 선택해 주세요",
        trigger: "change"
      }
    ],
    desc: [
      { required: true, message: "비고란을 입력해 주세요", trigger: "blur" }
    ]
  };

  private submitForm() {
    this.form.validate((valid: any) => {
      if (valid) {
        alert("submit!");
        
        console.log(this.ruleForm)
        
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }

  private resetForm() {
   this.form.resetFields();
  }

  created() {}
}
</script>
