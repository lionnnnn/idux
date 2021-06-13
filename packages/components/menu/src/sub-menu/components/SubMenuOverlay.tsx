import { computed, defineComponent, inject, ref } from 'vue'
import { getSlotNodes } from '@idux/cdk/utils'
import { useOpened, useSlots, useSubMenuStateProvider } from '../hooks'
import { useStateProvider } from '../../menu/hooks'
import { subMenuTimerProvider } from '../providers'

export default defineComponent({
  name: 'IxSubMenuOverlay',
  setup() {
    const slots = useSlots()
    const stateProvider = useStateProvider()
    const subStateProvider = useSubMenuStateProvider()
    const { onOpen } = useOpened(subStateProvider)
    const [, { onDelay, onCancel }] = inject(subMenuTimerProvider, [
      ref(null),
      {
        onDelay: () => {},
        onCancel: () => {},
      },
    ])

    const className = computed(() => [
      'ix-menu-vertical',
      'ix-menu-overlay',
      `ix-menu-${stateProvider.value.theme}`,
      subStateProvider.value.overlayClass,
    ])

    const handleMouseEnter = () => {
      onCancel()
    }

    const handleMouseLeave = () => {
      onDelay(() => {
        onOpen(subStateProvider.value.value)
        onCancel()
      }, 30)
    }

    return { slots, className, handleMouseEnter, handleMouseLeave }
  },
  render() {
    const { slots, className, handleMouseEnter, handleMouseLeave } = this

    return (
      <ul class={className} onMouseenter={handleMouseEnter} onMouseleave={handleMouseLeave}>
        {getSlotNodes(slots)}
      </ul>
    )
  },
})
