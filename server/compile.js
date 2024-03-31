const { readFileSync } = require('fs')
const { resolve } = require('path')
const tagList = JSON.parse(readFileSync(resolve(__dirname, 'data/tag.json'), 'utf-8'))
const eventList = JSON.parse(readFileSync(resolve(__dirname, 'data/event.json'), 'utf-8'))
const typeList = JSON.parse(readFileSync(resolve(__dirname, 'data/type.json'), 'utf-8'))

/**
 * 实现功能
 * 编译fileJSON
 * 创建文件夹 output / Counter
 * 创建文件 handlers.js states.js index.vue
 * @param {*} filename
 * @param {*} fileJSON
 */
module.exports = function (filename, fileJSON) {
  const data = {
    state: {},
    props: {},
    computed: {},
    handlers: {}
  }
  const template = compileTemplate(fileJSON, data)
  compileScript(data)

  function compileTemplate(json, data) {
    const { tag, children, className, states, props, computed, text, events } = json

    if (!tagList.includes(tag)) {
      throw new Error('标签不存在')
    }
    let html = `<${tag} `

    if (className) {
      // ["app", "app1"] => class="app app1"
      html += `class="${className.join(' ')}"`
    }

    if (events) {
      for (let k in events) {
        if (!eventList.includes(k)) {
          return new Error('事件名称不存在')
        }

        html += `@${k}="${ Object.keys(events[k]).join(',') }"`;

        data.handlers = {
          ...data.handlers,
          ...events[k]
        }
      }
    }

    // 闭合
    html = html.trim() + '>';

    if (text) {
      html += text
    }

    if (states) {
      // {{ count + count1 }}
      html += `{{ ${Object.keys(states).join('+')} }}`
      data.state = {
        ...data.state,
        ...states
      }
    }

    if (props) {
      for (let k in props) {
        if (!typeList.includes(props[k])) {
          return new Error('属性类型不存在')
        }
      }
      html += `{{ ${Object.keys(props).join('+')} }}`
      data.props = {
        ...data.props,
        ...props
      }
    }

    if (computed) {
      html += `{{ ${Object.keys(computed).join('+')} }}`
      data.computed = {
        ...data.computed,
        ...computed
      }
    }

    if (children) {
      for (let subHTML of children) {
        html += compileTemplate(subHTML, data)
      }
    }

    html += `</${tag}>`

    return html
  }
}

function compileScript(data) {
  const { state, props, computed, handlers } = data;
  console.log('---', { state, props, computed, handlers })
}
