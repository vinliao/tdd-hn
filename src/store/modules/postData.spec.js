// this is taken from
// https://lmiller1990.github.io/electic/posts/mocks_and_stubs:_testing_api_requests_with_vue.html


/*
some realization: since this is test, it's creating a new vue instance instead
of using the main vue instance. This means that the api.js won't initialize
from the main.js, and this is because it's not "creating" the vue instance
from there
*/

import postData from './postData.js'

const mock_data_get = [
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
// if we use axios.get(), it will return mock_data_get instead
// regardless of where it gets to

// this is pretty useful because we don't need to wait for the request
// to the server, it all happens locally, which means it's quicker
jest.mock('axios', () => {
  return {
    get: () => (mock_data_get)
  }
})

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
    // Q: why use commit and not dispatch?
    expect(store.commit).toHaveBeenCalledWith('SET_POST', { post_id: 123 })
  })
})

describe('set_post', () => {
  it('sets post properly to store', () => {
    // maybe I have to mock the state
    const state = {
      
    }


    // how do I verify that the mutation work properly?
    // what kind of assertion do I have to make?
  })
})