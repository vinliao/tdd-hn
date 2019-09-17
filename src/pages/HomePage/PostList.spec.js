import { shallowMount } from '@vue/test-utils'
import PostList from '@/pages/HomePage/PostList'

describe('PostList', () => {
  it('has the right item list length', () => {
    // test passing props to SinglePost componenet
    const data = {
      posts: [{}, {}, {}],
    }

    const wrapper = shallowMount(PostList, {
      propsData: data
    })

    const single_items = wrapper.findAll({ name: 'single-post' })
    expect(single_items.exists()).toBe(true)
    expect(single_items).toHaveLength(data.posts.length)
  })
})