<template>
  <div>
    <h1>Filter Exam</h1>
    <p>첫 글자 대무자 변환 (kim) => {{'kim' | uppercaseFirst}}</p>
    <p>특수 문자 제거 (123*456&7(*@9#10)=> {{'123*456&7(*@9#10' | removeSpecialChar}}</p>
    <p>천 단위 콤마 (100000000000)=> {{'100000000000' | toThousand}}</p>
    <p>날짜 형식 (Date 객체)) => {{new Date() | toDate }}</p>
    <p>날짜 형식 (Date 객체)) => {{new Date() | toDate }}</p>
    <p>억단위 표시 (1000000000) => {{ 1000000000| oneHunderdthound }}</p>
    <p>억단위 표시 (140000000) => {{ 140000000| oneHunderdthound }}</p>
    <p>억단위 표시 (50000000) => {{ 50000000|| oneHunderdthound }}</p>
    <p>억단위 표시 (10000000) => {{ 10000000 | oneHunderdthound }}</p>
    <p>억단위 표시 (5000000) => {{ 5000000 | oneHunderdthound }}</p>
    <p>억단위 표시 (3270000) => {{ 3270000 | oneHunderdthound(3) }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class FilterExam extends Vue {
  created() {}
}
</script>
