<template>
  <div>
    <h1>Filter Exam</h1>
    <p>{{'kim' | uppercaseFirst}}</p>
    <p>{{'123*456&7(*@9#10' | removeSpecialChar}}</p>
    <p>{{'100000000000' | toThousand}}</p>
    <p>{{new Date() | toDate }}</p>
    <p>{{ '1111111111111'| abbreviation(5) }}</p>
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
