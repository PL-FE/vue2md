const { createFile, getFileName } = require("./utils")
const table = require('markdown-table');

const Md = {
  h: (text, level) => new Array(level).fill('#').join('') + ' ' + text,
  item: (text) => `- ${text}`,
  bold: (text) => `**${text}**`,
  italic: (text) => `*${text}*`,
  backtick: (text) => '`' + `${text}`.replace(/`/g, '\\`') + '`',
  indent: (level, slug) => slug.repeat(level),
  code: (text, lang, inline = false) => {
    return inline
      ? `<code class="language-${lang}">${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>`
      : '```' + lang + '\n' + text + '\n```';
  },
};
function outputMd (component, filePath) {

  const head = renderHead(component, filePath)
  const props = renderProps(component, filePath)
  const slots = renderSlots(component, filePath)
  const events = renderEvents(component, filePath)
  const methods = renderMethods(component, filePath)
  const data = renderData(component, filePath)
  const computed = renderComputed(component, filePath)

  const layout = [
    head,
    props,
    slots,
    events,
    methods,
    data,
    computed
  ];

  const str = layout.reduce((pre, cur) => {
    pre += (cur || '')
    return pre
  }, '')
  console.log('str', str)
  createFile(str, filePath, '.md')
}

function renderHead (component, filePath) {
  const componentName = getFileName(filePath)
  const title = componentName

  Md.h(title, 1)

  return `
${Md.h(title, 2)}

一些简单说明

${Md.h('基本使用', 3)}

:::demo

\`\`\`html
<template>
<v-${componentName}></v-${componentName}>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {},
  };
</script>

\`\`\`

:::

  `
}
function renderProps (component) {
  const { props } = component
  const attrs = props.map(prop => {
    const { name, description, type, default: defaultValue } = prop
    const defaultValueWrap = parseFunctionString(defaultValue)
    const baseType = typeof defaultValueWrap
    const packageType = type === 'unknown' ? baseType[0].toLocaleUpperCase() + baseType.slice(1) : type
    return removeNewlines([name, description, packageType, defaultValueWrap])
  })

  return `
  ${Md.h('属性', 2)}

  ${table([
    ['属性名称', '说明', '类型', '默认值'],
    ...attrs
  ])}
  `
}
function renderSlots (component) {
  const { slots } = component
  if (!(slots && slots.length)) {
    return
  }
  const attrs = slots.map(slot => {
    const { name, description } = slot
    return removeNewlines([name, description])
  })
  return `
  ${Md.h('插槽', 2)}

  ${table([
    ['插槽名称', '说明'],
    ...attrs
  ])}
  `
}
function renderEvents (component) {
  const { events } = component
  if (!(events && events.length)) {
    return
  }
  const attrs = events.map(event => {
    const { name, description, arguments } = event
    const argumentsName = arguments.map(it => it.name).join(',')
    return removeNewlines([name, description, argumentsName])
  })
  return `
  ${Md.h('事件', 2)}

  ${table([
    ['事件名称', '说明', '回调参数'],
    ...attrs
  ])}
  `
}

function renderMethods (component) {
  const { methods } = component
  if (!(methods && methods.length)) {
    return
  }
  const attrs = methods.map(method => {
    const { name, description, params, returns } = method
    const paramsWrap = params.map(a => a.name).join(',')
    return removeNewlines([name, description, paramsWrap, returns.type])
  })
  return `
  ${Md.h('方法', 2)}

  ${table([
    ['方法名', '说明', '参数', '返回值'],
    ...attrs
  ])}
  `
}
function renderData (component) {
  const { data } = component
  if (!(data && data.length)) {
    return
  }
  const attrs = data.map(field => {
    const { name, type, description } = field
    return removeNewlines([name, type, description])
  })
  return `
  ${Md.h('数据', 2)}

  ${table([
    ['名称', '类型', '说明'],
    ...attrs
  ])}
  `
}
function renderComputed (component) {
  const { computed } = component
  if (!(computed && computed.length)) {
    return
  }
  const attrs = computed.map(field => {
    const { name, type, description, dependencies } = field
    const dependenciesWrap = dependencies.join(',')
    return removeNewlines([name, type, description, dependenciesWrap])
  })
  return `
  ${Md.h('计算属性', 2)}

  ${table([
    ['名称', '类型', '说明', '依赖数据'],
    ...attrs
  ])}
  `
}

/**
 * 删除换行符号
 */
function removeNewlines (arr) {
  return arr.map(function (str) {
    if (typeof str === 'string') {
      return str.replace(/[\r\n]+/g, "");
    }
    return str
  });
}

/**
 * 解析字符串函数
 * 返回函数返回值
 */
function parseFunctionString (funStr) {
  if (typeof funStr === 'string') {
    if ('empty array' === funStr) {
      return '[]'
    }
    return funStr
  }
  const functionObject = new Function(`return ${funStr}`);
  const result = functionObject();
  let value = typeof result === 'function' ? result() : result
  value = typeof value === 'object' ? JSON.stringify(value) : value
  return value
}

module.exports = outputMd

