// this is taken from
// https://lmiller1990.github.io/electic/posts/mocks_and_stubs:_testing_api_requests_with_vue.html

import PostStore from './isolated_post.module.js'
import api from '@/api'

const fake_data = [
  {
    id: 123,
    title: 'first title'
  },
  {
    id: 321,
    title: 'second title'
  }
]

// The purpose of mocking function is to replace the function
// we don't care testing about with fake one, so we can ignore it

// for example the test below, I only want to test whether the commit
// have been called with the right data or not, I don't care about calling
// the function (it's unit test after all). I can mock the get function
// and let it return some fake data, and write actual test for the thing
// that I care about: get_store

// here's another example of the usage of mocking: when sending post request
// when we post something, we don't want to actually post to a server, we can
// just mock the post function, which will return a fake code 200. Not only that,
// mocked function have special property like being able to check what the parameters
// those post function are passing to the database. Here's an example of it

// api.post = jest.fn(() => {code: 200})

// so when we call a post request, then it will return 200. We also can use
// cool things like these except functions to see information about the api.post
// expect(api.post).toHaveBeenCalled
// expect(api.post).toHaveBeenCalledWith
// expect(api.post).toHaveReturned

// this is an es6 class mock, it mocks the entire module. In this case,
// it mocks the entire @/api module and we can specify the return
// of each function
// jest.mock('@/api', () => {
//   return {
//     get: () => (fake_data),

//     // I can add other mocks here if I want
//     post: () => ('Example mock')
//   }
// })

// but those are redundant, it's better to only
// mock the get
// api.get = jest.fn(() => (fake_data))

describe('actions', () => {
  it('gets posts and commits response', async () => {
    // we mock the commit function (the mutation) so that we
    // can "emulate" saving data to store

    // the cool thing about this code is that it's not even attempting
    // to test the commit function, as long it commits with the right
    // data format, then it's fine
    const context = {
      commit: jest.fn()
    }

    // api.get = jest.fn(() => ({data: fake_data}))
    api.get = jest.fn(() => Promise.resolve({data: fake_data}))
    await PostStore.actions.get_post(context)

    expect(context.commit).toHaveBeenCalledWith('SET_POST', fake_data)
  })
})

describe('mutations', () => {
  it('sets post properly to store', () => {
    const state = {
      posts: []
    }

    PostStore.mutations.SET_POST(state, fake_data)
    expect(state.posts).toEqual(fake_data)

    // this doesn't work because SET_POST isn't a jest mock function
    // expect(PostStore.mutations.SET_POST).toHaveBeenCalledTimes(2)
  })
})

describe('getters', () => {
  it('returns the correct data given the page', () => {
    const state = {
      posts: Array(4).fill().map((v, i) => i),
      current_page: 0,
      post_length: 2
    }

    const first_page = PostStore.getters.get_post(state)
    expect(first_page).toEqual(state.posts.slice(0, state.post_length))

    // PostStore.commit('ADD_PAGE')
    // it should've been a commit but idk man
    state.current_page++

    const second_page = PostStore.getters.get_post(state)
    expect(second_page).toEqual(state.posts.slice(state.post_length))

  })

  // max page returns 1, really weird...
  it('returns the correct maxpage', () => {
    const state = {
      posts: Array(5).fill().map((v, i) => i),
      current_page: 0,
      post_length: 2,
    }

    const max_page = PostStore.getters.get_max_page(state)
    expect(max_page).toEqual(3)
  })
})