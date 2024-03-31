<template>
   <div class="counter">
    <h1>{{ title }}</h1>
    <h2>{{ count }}</h2>
    <h3>{{ doubleCount }}</h3>
    <button @click="handleAddBtnClick($event), handleShowCount()">按钮</button>
   </div>
</template>

<script setup>
import { ref, computed } from "vue"

const props = defineProps({
  title: String
})
const count = ref(150)

const doubleCount = computed(() => count.value * 2)

const handleAddBtnClick = () => {
  count.value += 10
}
const handleShowCount = () => {
  console.log(count.value)
}
</script>

<style></style>
