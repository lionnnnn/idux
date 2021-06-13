import { defineComponent } from 'vue'
import { IxOverlay } from '@idux/components/private/overlay'
import IxSubMenuTitle from './SubMenuTitle'
import IxSubMenuOverlay from './SubMenuOverlay'
import { useTimer, useVisible } from '../hooks'

export default defineComponent({
  name: 'IxSubMenuContent',
  components: { IxOverlay, IxSubMenuTitle, IxSubMenuOverlay },
  setup() {
    const visible = useVisible()
    useTimer()

    return { visible }
  },
  render() {
    const { visible } = this

    return (
      <IxOverlay
        visible={visible}
        trigger="manual"
        clsPrefix="ix-menu"
        allowEnter
        scrollStrategy="close"
        placement="rightStart"
        showArrow={false}
      >
        {{ trigger: () => <IxSubMenuTitle />, overlay: () => <IxSubMenuOverlay /> }}
      </IxOverlay>
    )
  },
})
