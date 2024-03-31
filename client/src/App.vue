<script setup>
import Counter from './components/Counter/index.vue';
import axios from "axios"

const getData = async () => {
  await axios.post("http://localhost:3000/compile", {
    filename: "Counter.vue",
    fileJSON: {
      "tag": "div",
      "className": ["app", "app1"],
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
              "handleAddBtnClick($event)": "count.value += 1",
              "handleShowCount()": "console.log(count.value)"
            }
          },
          "text": "ADD"
        }
      ]
    }
  })
}


</script>

<template>
  <div>
    <Counter title="This is a Counter Component" />
    <button @click="getData">请求</button>
  </div>
</template>
