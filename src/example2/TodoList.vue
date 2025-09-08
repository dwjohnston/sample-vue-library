<template>
  <div>
    <h2>Todos</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Todo } from '@/services/getTodos'
import { inject, onMounted, ref } from 'vue'

const getTodos = inject('getTodos')
const todos = ref<Array<Todo>>([]);

onMounted(async () => {
    const gottenTodos = await getTodos(); 
    todos.value = gottenTodos;
}); 

</script>