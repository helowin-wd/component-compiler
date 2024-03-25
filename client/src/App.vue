<script setup>
import Counter from './components/Counter/index.vue';
import axios from "axios"

axios.post("http://localhost:3000/compile", {
  filename: "Counter.vue",
  fileJSON: {
    "tag": "div",
    "className": "[counter]",
    "children": [
      {
        "tag": "h1",
        "props": {
          "title": "String"
        }
      },
      {
        "tag": "h2",
        "states": {
          "count": 150
        }
      },
      {
        "tag": "h3",
        "computed": {
          "doubleCount": "count.value * 2"
        }
      },
      {
        "tag": "button",
        "events": {
          "click": {
            "handleAddBtnClick()": "count.value += 1",
            "handleShowCount()": "console.log(count.value)"
          }
        }
      }
    ]
  }
})
</script>

<template>
  <div>
    <Counter title="This is a Counter Component" />
  </div>
</template>
