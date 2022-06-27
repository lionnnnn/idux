---
category: components
type: 数据录入
title: Mentions
subtitle: 提及
---

提及输入组件

## 何时使用

用于在输入框中提及某人或某事，常用于发布、聊天或评论功能。

## API

### ix-mentions

#### MentionsProps

支持textarea的所有属性

| 名称             | 说明                               | 类型                                                         | 默认值 | 全局配置 | 备注                                                         |
| ---------------- | ---------------------------------- | ------------------------------------------------------------ | ------ | -------- | ------------------------------------------------------------ |
| `v-model:value` | 当前输入框值                       | `string`                                                     | -      | -        | -                                                            |
| `control`       | 控件控制器                         | `string \| AbstractControl`                                  | -      | -        | 当存在 `control` 时, <br />控件将由 `AbstractControl` 完全控制，<br />此时 `value` 会失效 |
| `empty`         | 自定义当下拉列表为空时显示的内容   | `string | EmptyProps | #empty`                               | -      | -        | -                                                            |
| `options`        | 下拉选项列表，可以取代 option插槽  | `MetionsOption[]`                                            | -      | -        | -                                                            |
| `overlayClass`   | 下拉列表的 `className` 属性        | `string`                                                     | -      | -        | -                                                            |
| `prefix`         | 设置触发下拉列表的关键字           | `string`                                                     | `@`    | ✅        | -                                                            |
| `filterOption`   | 根据输入的关键字对下拉列表进行筛选 | `boolean | (searchValue: string, option: MentionsOptionProps) => boolean` | `true` | -        | 为 `true` 时使用 `defaultFilterFn`, 如果使用远程搜索，应该设置为 `false` |
| `split`          | 设置选中某下拉项后的分隔符         | `string`                                                     | `' '`  | ✅        | -                                                            |
| `onBlur`         | 失去焦点时触发                     | `() => void`                                                 | -      | -        | -                                                            |
| `onChange`       | 输入值改变时触发                   | `(text: string) => void`                                     | -      | -        | -                                                            |
| `onFocus`        | 输入框获得焦点时触发               | `() => void`                                                 | -      | -        | -                                                            |
| `onSearch`       | 搜索下拉列表时触发                 | `(text: string, prefix: string) => void`                     | -      | -        | -                                                            |
| `onSelect`       | 选择下拉选项时触发                 | `(option: OptionProps, prefix: string) => void`              | -      | -        | -

```ts
export interface MetionsOption {
  value: string
  disabled?: boolean
}

const defaultFilterOption = (searchValue: string, optionValue: string): boolean => {
  return optionValue.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
}

```

#### MentionsSlots

| 名称      | 说明               | 参数类型 | 备注 |
| --------- | ------------------ | -------- | ---- |
| `default` | 下拉列表的具体选项 | -        | -    |

#### MentionsMethods

| 名称      | 说明             | 类型         | 备注 |
| --------- | ---------------- | ------------ | ---- |
| `blur()`  | 移除输入框的焦点 | `() => void` | -    |
| `focus()` | 聚焦输入框       | `() => void` | -    |

### ix-metions-option

#### MentionsOptionProps

| 名称    | 说明               | 类型                | 默认值 | 全局配置 | 备注                                     |
| ------- | ------------------ | ------------------- | ------ | -------- | ---------------------------------------- |
| `disabled` | 是否禁止选择 | `boolean` | -      | -        |                                        |
| `value` | 下拉选项的选择值   | `string`            | -      | -        |必填项，同时也是被选中后文本框显示的内容        |

#### MentionsOptionSlot

| 名称      | 说明               | 参数类型 | 备注 |
| --------- | ------------------ | -------- | ---- |
| `default` | 下拉选项的展示内容   | -        | -    |
