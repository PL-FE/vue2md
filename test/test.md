## test

一些简单说明

### 基本使用

:::demo

```html
<template>
  <v-test></v-test>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {},
  };
</script>
```

:::

## 属性

| 属性名称                                         | 说明                            | 类型       | 默认值                          |
| ------------------------------------------------ | ------------------------------- | ---------- | ------------------------------- |
| model                                            | The checkbox model              | Array      |                                 |
| test-porps                                       |                                 | String     | function() { return { a: 1 } }  |
| disabled                                         | Initial checkbox state          | Boolean    |                                 |
| enabled                                          | Initial checkbox value          | Boolean    | true                            |
| label                                            | The checkbox label              | String     | "Unamed checkbox"               |
| object                                           | The checkbox custom type object | CustomType | null                            |
| bool-false                                       |                                 | Boolean    | false                           |
| int                                              |                                 | Number     | 100_000_000                     |
| prop-with-default-as-keyword-but-without-default |                                 | Object     | {}                              |
| prop-with-default-as-keyword                     |                                 | Object     | {}                              |
| prop-with-empty-default-as-keyword               |                                 | Object     | () => ({})                      |
| number-prop-with-default-as-keyword              |                                 | Number     | 0                               |
| string-prop-with-default-as-keyword              |                                 | String     | ''                              |
| boolean-prop-with-default-as-keyword             |                                 | Boolean    | false                           |
| array-prop-with-default-as-keyword               |                                 | Array      | []                              |
| validator                                        | The input validation function   | Function   | (value) => !Number.isNaN(value) |
| prop-with-null-as-default-keyword                |                                 | Object     | null                            |
| prop-with-undefined-as-default-keyword           |                                 | Object     | undefined                       |

## 插槽

| 插槽名称 | 说明                                    |
| -------- | --------------------------------------- |
| default  |                                         |
| label    | Use this slot to set the checkbox label |

## 事件

| 事件名称    | 说明                                             | 回调参数        |
| ----------- | ------------------------------------------------ | --------------- |
| loaded      | Emitted when the component has been loaded       |                 |
| enabled     | Emitted the event `enabled` when loadedMultilign | true            |
| updateEvent |                                                  | { flag: value } |

## 方法

| 方法名       | 说明                          | 参数     | 返回值  |
| ------------ | ----------------------------- | -------- | ------- |
| check        | Check if the input is checked |          | void    |
| prop         |                               |          | void    |
| dynamic      | Make component dynamic        |          | void    |
| dynamicMode  | Enter to dynamic mode         |          | void    |
| enable       | Enable the checkbox           | value    | void    |
| testMethods  | 测试注释                      | name,age | unknown |
| testMethods2 | 标准注释                      | name,age | unknown |

## 数据

| 名称         | 类型   | 说明                                                                              |
| ------------ | ------ | --------------------------------------------------------------------------------- |
| initialValue | string | The initial component value.Used to detect changes and restore the initial value. |
| currentValue | string |                                                                                   |
| data         | object |                                                                                   |

## 计算属性

| 名称               | 类型   | 说明                                                              | 依赖数据                  |
| ------------------ | ------ | ----------------------------------------------------------------- | ------------------------- |
| id                 | string | The component identifier.Generated using the `initialValue` data. | initialValue              |
| changed            | object |                                                                   | currentValue,initialValue |
| withNoDependencies | string |                                                                   |                           |
