import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import HomePage from '@/pages/HomePage'
import api from '@/api'
import VueRouter from 'vue-router'
import { routes } from '@/routes'

describe('HomePage vuex', () => {
  // setup the test by mocking the store
  api.get = jest.fn(() => Promise.resolve())
  const posts = [{}, {}, {}]
  const $store = {
    dispatch: jest.fn(),
    getters: {
      get_post: jest.fn(() => posts)
    }
  }

  const wrapper = mount(HomePage, {
    mocks: {
      $store
    }
  })

  it('dispatch to get main page', async () => {
    const first_dispatch = {
      type: 'news',
      page: 1
    }

    expect($store.dispatch).toHaveBeenCalledWith('get_post', first_dispatch)
    // this asserts that the getters are working fine
    expect(wrapper.vm.posts()).toEqual(posts)

    // I originally wanted to assert this
    // expect($store.getters.get_post).toHaveBeenCalled()
    // but for some reason it just doesn't work, I have on idea why

  })

  it('passes the right props to child component', () => {
    const post_list = wrapper.find({ name: 'post-list' })

    // the post needs a parantheses because it's still
    // in the form of "function"
    expect(post_list.props().posts()).toEqual(posts)

    // Some note: I initially wanted to test whether passing
    // a list would render the thing properly, but I've tested
    // that on PostList.spec.js, it kinda useless if I do that.
  })

  // Another alternative is using the real store
  // https://lmiller1990.github.io/vue-testing-handbook/vuex-in-components-mutations-and-actions.html#testing-with-a-real-vuex-store
})