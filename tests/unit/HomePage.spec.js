import { shallowMount } from '@vue/test-utils'
import HomePage from '@/pages/HomePage'

describe('HomePage', () => {
  const wrapper = shallowMount(HomePage)

  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true)
  })
  
})