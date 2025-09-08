import { getTodos } from '@/services/getTodos'
import { onMounted, ref } from 'vue'

export type Todo=  {
  id: number
  text: string
}

export function useTodos() {
  const todos = ref<Todo[]>([])

  onMounted(async () => {
    const gottenTodos = await getTodos(); 
    todos.value = gottenTodos;
  })
}