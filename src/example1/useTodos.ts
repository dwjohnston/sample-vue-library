import { getTodos, type Todo } from '@/services/getTodos'
import { onMounted, ref, type Ref } from 'vue'


export function useTodos() : Ref<Array<Todo>> {
  const todos = ref<Todo[]>([])

  onMounted(async () => {
    const gottenTodos = await getTodos(); 
    console.log(gottenTodos);
    todos.value = gottenTodos;
  })
  return todos;
}