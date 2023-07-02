# Vue2md

利用 `@vuedoc/parser` 解析 vue
输出 markdown 文件

## 使用方式

```cmd
npm i vue2md -g

vue2md --input [文件路径]
```

## 命令
```shell 
--input,-i # 指定输入文件路径
--output，-o # 指定输出路径
```


例如：
```js
// 默认会在输入的文件目录生成同名 md 文件
vue2md --input [文件路径]

// 指定输出路径
vue2md --input [文件路径] --output [输出路径]
```

