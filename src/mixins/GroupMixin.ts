import { Component, Vue, Watch } from 'vue-property-decorator'
//creating mixins.

@Component({
})
export class GroupMixin extends Vue {
  test: string = 'sss'

  goBack = () => {
    alert('go Back')
  }
}