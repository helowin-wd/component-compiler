<template><div class="app app1"><h1>{{ title }}</h1><h2>{{ count }}</h2><h3>{{ doubleCount }}</h3><button @click="handleAddBtnClick($event),handleShowCount()">ADD</button></div></template> 
 <script setup>import { computed } from 'vue';
import { handleAddBtnClick } from './handlers.js';import { handleShowCount } from './handlers.js';import { count } from './states.js';
const props = defineProps({
    title: String,
  })
const doubleCount = computed(() => count.value * 2)
</script>