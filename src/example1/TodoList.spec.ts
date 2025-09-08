import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import TodoList from './TodoList.vue'

// Mock the useTodos composable
vi.mock('./useTodos', () => ({
  useTodos: () => [
    { id: 1, text: 'Buy milk' },
    { id: 2, text: 'Walk the dog' }
  ]
}))

describe('TodoList', () => {
  it('renders todos from useTodos', () => {
    const wrapper = mount(TodoList)
    const items = wrapper.findAll('li')
    expect(items).toHaveLength(2)
    expect(items[0].text()).toBe('Buy milk')
    expect(items[1].text()).toBe('Walk the dog')
  })
})