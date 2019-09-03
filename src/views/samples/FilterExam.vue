<template>
  <div>
    <h1>Filter Exam</h1>
    <p>{{'aaaa' | uppercaseFirst}}</p>
    <p>{{'[aaaa]' | removeSpecialChar}}</p>
    <p>{{'123000000' | toThousand}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class FilterExam extends Vue {

  created() {
    
  }
}
</script>
