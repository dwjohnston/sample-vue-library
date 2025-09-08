<script setup lang="ts">
import {provide} from "vue";
import TodoList from './example1/TodoList.vue';
import TodoList2 from './example2/TodoList.vue';
import { getTodos } from "./services/getTodos";


provide("getTodos", getTodos )


</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <TodoList/>
  <TodoList2/>
</template>

<style scoped></style>
