import { mount, createLocalVue } from '@vue/test-utils'
import HomePage from '@/pages/HomePage'
import CommentPage from '@/pages/CommentPage'
import api from '@/api'
import VueRouter from 'vue-router'
import { routes } from '@/routes'

// TODO:
// refactor this to use local vue
// since vue router needs to use localvue, might as well
// use local vue on both vuex and vue router
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

// I actually have the option to mock the router entirely, but idk
// that might not be the best thing to do..
describe('HomePage router', () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)

  it('will render comment component with correct id', () => {
    const router = new VueRouter({ routes })
    const id = 3

    const $store = {
      dispatch: jest.fn(),
      getters: {
        get_post: jest.fn(() => posts)
      }
    }

    const wrapper = mount(HomePage, {
      router,
      localVue,
      mocks: { $store }
    })

    // router.push(`comment/${id}`)
    wrapper.find('button').trigger('click')

    console.log(wrapper.text())
    const commentComponent = wrapper.find(CommentPage)
    expect(commentComponent.exists()).toBe(true)
    expect(commentComponent.vm.$data.id).toEqual(id)
    // expect(wrapper.find(CommentPage).exists()).toBe(true)
    // expect(wrapper.text()).toContain(idkkk)

    // expect(commentComponent.vm.id).toEqual(id)
  })
})