import type { MountingOptions } from '@vue/test-utils'
import type { TooltipProps } from '../src/types'

import { mount, VueWrapper } from '@vue/test-utils'
import { renderWork, wait } from '@tests'
import IxTooltip from '../src/Tooltip.vue'

describe('Tooltip.vue', () => {
  let TooltipMount: (options?: MountingOptions<Partial<TooltipProps>>) => VueWrapper<InstanceType<typeof IxTooltip>>

  beforeEach(() => {
    TooltipMount = options => mount(IxTooltip as any, { ...options }) as any
  })

  renderWork(IxTooltip)

  test('placement', async () => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
    const tooltipWrapper = TooltipMount({
      slots: {
        default: '<div id="trigger">Trigger</div>',
      },
      props: {
        title: 'Title',
      },
    })
    await tooltipWrapper.get('#trigger').trigger('mouseenter')
    await wait(100)
    expect(document.querySelector('.ix-tooltip')!.getAttribute('class')).toContain('ix-overlay-top')

    await tooltipWrapper.setProps({ placement: 'bottom' })
    expect(document.querySelector('.ix-tooltip')!.getAttribute('class')).toContain('ix-overlay-bottom')

    await tooltipWrapper.setProps({ placement: 'left' })
    expect(document.querySelector('.ix-tooltip')!.getAttribute('class')).toContain('ix-overlay-left')

    await tooltipWrapper.setProps({ placement: 'right' })
    expect(document.querySelector('.ix-tooltip')!.getAttribute('class')).toContain('ix-overlay-right')
  })
})
