import { shallowMount, mount } from '@vue/test-utils'
import HomePage from '@/pages/HomePage'
import api from '@/api'

describe('HomePage', () => {
  // FIXME: having these two $store is breaking the whole thing,
  // this is one consequence of not using localvue
  // using a fake store and mock it
  it('dispatch to get main page', async () => {
    api.get = jest.fn(() => Promise.resolve({}))
    const $store = {
      dispatch: jest.fn(),
    } 

    shallowMount(HomePage, {
      mocks: {
        $store
      }
    })

    const first_dispatch = {
      type: 'news',
      page: 1
    }

    expect($store.dispatch).toHaveBeenCalledWith('get_post', first_dispatch)
  })

  it('renders the right amount of items from getters', () => {
    const posts = [{}, {}, {}]
    const $store = {
      getters: {
        // get_post: jest.fn(() => posts)
        get_post: jest.fn()
      }
    }
  })

  // it('renders the right amount of item (from getters)', () => {
  //   const posts = [{}, {}, {}]
  //   const $store = {
  //     getters: {
  //       get_post: jest.fn(() => posts)
  //     },
  //     dispatch: jest.fn(),
  //   }  

  //   const wrapper = shallowMount(HomePage, {
  //     mocks: {
  //       $store
  //     }
  //   })

  //   // const post_list = wrapper.find({ name: 'post-list' })
  //   // expect(post_list.exists()).toBe(true)
  //   // const single_items = wrapper.findAll({ name: 'single-post' }) 
  //   // expect(single_items).toHaveLength(posts.length)

  //   // expect post list passed with props...
  // })

  // Another alternative is using the real store
  // https://lmiller1990.github.io/vue-testing-handbook/vuex-in-components-mutations-and-actions.html#testing-with-a-real-vuex-store
})