import type { App } from 'vue'

import IxOverlay from './src/Overlay'

IxOverlay.install = (app: App): void => {
  app.component(IxOverlay.name, IxOverlay)
}

export { IxOverlay }

export type { OverlayInstance, OverlayProps } from './src/types'
