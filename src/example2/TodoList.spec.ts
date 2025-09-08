import { flushPromises, mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoList from './TodoList.vue'

const mockGetTodos = async () => [
  { id: 1, text: 'Buy milk' },
  { id: 2, text: 'Walk the dog' }
]

describe('TodoList', () => {
  it('renders todos from injected useTodos', async () => {
    const wrapper = mount(TodoList, {
      global: {
        provide: {
          getTodos: mockGetTodos
        }
      }
    })

    await flushPromises();

    const items = wrapper.findAll('li');

    expect(items).toHaveLength(2)
    expect(items[0].text()).toBe('Buy milk')
    expect(items[1].text()).toBe('Walk the dog')
  })
})