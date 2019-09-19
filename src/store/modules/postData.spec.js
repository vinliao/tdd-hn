// this is taken from
// https://lmiller1990.github.io/electic/posts/mocks_and_stubs:_testing_api_requests_with_vue.html


/*
some realization: since this is test, it's creating a new vue instance instead
of using the main vue instance. This means that the api.js won't initialize
from the main.js, and this is because it's not "creating" the vue instance
from there
*/

import postData from './postData.js'
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

// this is mocking the axios module and it replaces the get function.
// if we use axios.get(), it will return fake_data instead
// regardless of where it gets to

// this is pretty useful because we don't need to wait for the request
// to the server, it all happens locally, which means it's quicker

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
api.get = jest.fn(() => (fake_data))

describe('get_post', () => {
  it('gets posts and commits response', async () => {
    // we mock the commit function (the mutation) so that we
    // can "emulate" saving data to store

    // the cool thing about this code is that it's not even attempting
    // to test the commit function, as long it commits with the right
    // data format, then it's fine

    // another term for store is context
    const store = {
      commit: jest.fn()
    }

    await postData.actions.get_post(store)
    expect(store.commit).toHaveBeenCalledWith('SET_POST', { post_id: 123 })
  })
})

describe('set_post', () => {
  it('sets post properly to store', () => {
    const state = {
      posts: {}
    }

    postData.mutations.SET_POST(state, fake_data)
    expect(state.posts).toEqual(fake_data)
  })
})