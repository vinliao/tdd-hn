// this is taken from
// https://lmiller1990.github.io/electic/posts/mocks_and_stubs:_testing_api_requests_with_vue.html

import PostStore from './post2.module.js'
import api from '@/api'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import cloneDeep from 'lodash.clonedeep'
import flushPromises from 'flush-promises'

const local_vue = createLocalVue()
local_vue.use(Vuex)

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

describe('Post Store', () => {
  it('dispatching get_post updates get_post getters', async () => {
    // network calls are still being mocked, the difference is
    // the store function (commit) aren't mocked anymore
    api.get = jest.fn(() => Promise.resolve({data: fake_data}))

    // I don't really know the reason to use clone deep
    // the reason for clone deep here is to prevent
    // changing the store config (post.module.js)
    // so that the subsequent unit test can use "fresh" config
    const post_store_clone = cloneDeep(PostStore)
    const store = new Vuex.Store(post_store_clone)

    // using dispatch automatically passes the store
    await store.dispatch('get_post')
    
    // await flushPromises()

    const result = store.getters.get_post
    // expect(store.getters.get_post(stor)).toEqual(fake_data)
    expect(result).toEqual(fake_data)
  })
})