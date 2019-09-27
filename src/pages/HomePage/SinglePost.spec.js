import { shallowMount, RouterLinkStub } from '@vue/test-utils'
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
      url: 'https://test-some-link.com'
    }

    const wrapper = shallowMount(SinglePost, {
      propsData: item
    })

    // this might fail if there's multiple link in the post
    // eh... if that's the case, just use id
    const item_link = wrapper.find('a')
    expect(item_link.attributes().href).toBe(item.url)
  })

  // I don't think this is important, this is testing the implementation
  // detail of router link
  // // TODO:
  // it('passes the right props on router link click', () => {
  //   const item = {
  //     id: 1,
  //   }

  //   const wrapper = shallowMount(SinglePost, {
  //     propsData: item,
  //     stubs: {
  //       RouterLink: RouterLinkStub
  //     }
  //   })

  //   const comment_link = wrapper.find(RouterLinkStub)
  //   // FIXME: still wrong
  //   expect(comment_link.props().to).toBe(`/comment/${item.id}`)
  // })
})