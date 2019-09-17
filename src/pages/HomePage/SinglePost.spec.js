import { shallowMount } from '@vue/test-utils'
import SinglePost from '@/pages/HomePage/SinglePost'

describe('SinglePost', () => {
  it('renders item text', () => {
    const item = {
      author: 'pg',
      points: 12,
    }

    const wrapper = shallowMount(SinglePost, {
      propsData: item
    })

    expect(wrapper.text()).toContain(item.author)
    expect(wrapper.text()).toContain(item.points)
  })

  it('renders the correct link', () => {
    const item = {
      title: 'This is test title',
      link: 'https://test-some-link.com'
    }

    const wrapper = shallowMount(SinglePost, {
      propsData: item
    })

    // this might fail if there's multiple link in the post
    // eh... if that's the case, just use id
    const item_link = wrapper.find('a')
    expect(item_link.attributes().href).toBe(item.link)
  })
  
})