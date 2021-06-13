import { defineComponent } from 'vue'
import IxSubMenuTitle from './SubMenuTitle'

export default defineComponent({
  name: 'IxSubMenuInlineContent',
  components: { IxSubMenuTitle },
  render() {
    return (
      <>
        <IxSubMenuTitle />
      </>
    )
  },
})
