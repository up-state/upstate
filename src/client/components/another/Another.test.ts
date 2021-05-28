import { mount } from '@vue/test-utils'
import { store } from '../../store'
import Another from './Another.vue'

describe('Another.test.ts', () => {
  it('renders message', () => {
    const wrapper = mount(Another, { global: { plugins: [store] } })

    expect(wrapper.text()).toContain('Todos')
  })
})
