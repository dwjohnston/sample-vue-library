import { flushPromises, mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoList from './TodoList.vue'
import { container } from 'tsyringe'
import { TodoService } from './Todo.service'

const mockGetTodos = async () => [
  { id: 1, text: 'Buy milk' },
  { id: 2, text: 'Walk the dog' }
]

describe('TodoList', () => {


  // This demonstrates that if you don't define the injected behaviour, it will enounter the default behaviour, which is to throw the NotImplementedError
  it.skip('renders todos from injected useTodos', async () => {

    

    const wrapper = mount(TodoList)

    await flushPromises();

    const items = wrapper.findAll('li');

    expect(items).toHaveLength(1)
    expect(items[0].text()).toBe('test test test')
  
  })


  it('renders todos from injected useTodos', async () => {

    class FakeTodoService extends TodoService {
      async getTodos() {
        return [
          {id:1, 
            text: "test test test"
          }
        ]
      }
    }

    container.register(TodoService, FakeTodoService)

    const wrapper = mount(TodoList)

    await flushPromises();

    const items = wrapper.findAll('li');

    expect(items).toHaveLength(1)
    expect(items[0].text()).toBe('test test test')
  
  })
})