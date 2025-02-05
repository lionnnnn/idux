/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

import type { FormatContext } from './useFormat'
import type { InputEnableStatus } from './useInputEnableStatus'
import type { DateConfig } from '@idux/components/config'

import { type ComputedRef, computed, watch } from 'vue'

import { convertArray, useState } from '@idux/cdk/utils'

import { compareDateTime, convertToDate, sortRangeValue } from '../utils'
import { type PickerControlContext, useControl } from './useControl'

export interface PickerRangeControlContext {
  buffer: ComputedRef<(Date | undefined)[] | undefined>
  panelValue: ComputedRef<(Date | undefined)[] | undefined>
  isSelecting: ComputedRef<boolean>
  bufferUpdated: ComputedRef<boolean>

  visiblePanel: ComputedRef<'datePanel' | 'timePanel'>
  setVisiblePanel: (value: 'datePanel' | 'timePanel') => void

  fromControl: PickerControlContext
  toControl: PickerControlContext

  init: (force?: boolean) => void
  handleDatePanelCellClick: (value: Date) => void
  handleDatePanelCellMouseenter: (value: Date) => void
}

export function useRangeControl(
  dateConfig: DateConfig,
  formatContext: FormatContext,
  inputEnableStatus: ComputedRef<InputEnableStatus>,
  valueRef: ComputedRef<(string | number | Date | undefined)[] | undefined>,
): PickerRangeControlContext {
  const { formatRef } = formatContext
  const [buffer, setBuffer] = useState<(Date | undefined)[] | undefined>(
    convertArray(valueRef.value).map(v => convertToDate(dateConfig, v, formatRef.value)),
  )
  const [bufferUpdated, setBufferUpdated] = useState(false)
  const handleBufferUpdate = (values: (string | number | Date | undefined)[] | undefined) => {
    setBuffer(sortRangeValue(dateConfig, getRangeValue(dateConfig, values, formatRef.value), 'date'))
    setBufferUpdated(true)
  }

  const [selectingDate, setSelectingDate] = useState<(Date | undefined)[] | undefined>(buffer.value)
  const [isSelecting, setIsSelecting] = useState<boolean>(false)
  const [visiblePanel, setVisiblePanel] = useState<'datePanel' | 'timePanel'>('datePanel')

  const handleVisiblePanelUpdate = (value: 'datePanel' | 'timePanel') => {
    visiblePanel.value !== value && setVisiblePanel(value)
    fromControl.visiblePanel.value !== value && fromControl.setVisiblePanel(value)
    toControl.visiblePanel.value !== value && toControl.setVisiblePanel(value)
  }

  const rangeValueRef = computed(() => convertArray(buffer.value))
  const fromDateRef = computed(() => rangeValueRef.value[0])
  const toDateRef = computed(() => rangeValueRef.value[1])

  const panelValue = computed(() => {
    if (isSelecting.value) {
      return sortRangeValue(dateConfig, [...convertArray(selectingDate.value)], 'date')
    }

    return convertArray(buffer.value)
  })

  watch(valueRef, handleBufferUpdate)

  const getValidBufferValue = (value: Date | undefined, isFrom: boolean) => {
    if (isFrom) {
      return compareDateTime(dateConfig, value, buffer.value?.[1], 'date') > 0
        ? [value, value]
        : [value, buffer.value?.[1]]
    }

    return compareDateTime(dateConfig, value, buffer.value?.[0], 'date') < 0
      ? [value, value]
      : [buffer.value?.[0], value]
  }

  const fromControl = useControl(dateConfig, formatContext, inputEnableStatus, fromDateRef, value => {
    setBuffer(getValidBufferValue(value, true))
    setBufferUpdated(true)
  })
  const toControl = useControl(dateConfig, formatContext, inputEnableStatus, toDateRef, value => {
    setBuffer(getValidBufferValue(value, false))
    setBufferUpdated(true)
  })

  watch(fromControl.visiblePanel, handleVisiblePanelUpdate)
  watch(toControl.visiblePanel, handleVisiblePanelUpdate)

  const init = (force = false) => {
    handleBufferUpdate(valueRef.value)
    handleVisiblePanelUpdate('datePanel')
    setBufferUpdated(false)
    fromControl.init(force)
    toControl.init(force)
  }

  const handleDatePanelCellClick = (value: Date) => {
    if (!isSelecting.value) {
      setIsSelecting(true)
      setSelectingDate([value, undefined])
    } else {
      setIsSelecting(false)
      handleBufferUpdate([selectingDate.value?.[0], value])
    }
  }

  const handleDatePanelCellMouseenter = (value: Date) => {
    if (!isSelecting.value) {
      return
    }

    setSelectingDate([selectingDate.value?.[0], value])
  }

  return {
    buffer,
    panelValue,
    isSelecting,
    bufferUpdated,

    visiblePanel,
    setVisiblePanel: handleVisiblePanelUpdate,

    fromControl,
    toControl,

    init,
    handleDatePanelCellClick,
    handleDatePanelCellMouseenter,
  }
}

function getRangeValue(
  dateConfig: DateConfig,
  values: (string | number | Date | undefined)[] | undefined,
  format: string,
) {
  return convertArray(values).map(v => convertToDate(dateConfig, v, format))
}
