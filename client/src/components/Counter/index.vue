<template>
  <div class="counter">
   <h1>{{ title }}</h1>
   <h2>{{ count }}</h2>
   <h3>{{ doubleCount }}</h3>
   <button @click="handleAddBtnClick($event), handleShowCount()">按钮</button>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { count } from "./states"
import { handleAddBtnClick, handleShowCount } from "./handlers"

const props = defineProps({
 title: String
})

const doubleCount = computed(() => count.value * 2)
</script>

<style></style>
