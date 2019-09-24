// this is taken from
// https://lmiller1990.github.io/electic/posts/mocks_and_stubs:_testing_api_requests_with_vue.html

import PostConfig from './post.module.js'
import api from '@/api'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import cloneDeep from 'lodash.clonedeep'

const localVue = createLocalVue()
localVue.use(Vuex)

const fake_data = [{
  id: 123,
  title: 'first title'
}, {
  id: 321,
  title: 'second title'
}]

// I could use 
// fake_data = 'some fake data'
// and it would be fine too


describe('Post actions', () => {
  api.get = jest.fn(() => Promise.resolve({ data: fake_data })) 
  let store

  // beforeEach are the things that are run before all unit test
  // in this case it initializes a new copy of a store on each unit test
  beforeEach(() => {
    // making the real post config means we're using the "real"
    // function instead of a mocked one.
    const pots_config_clone = cloneDeep(PostConfig)
    store = new Vuex.Store(pots_config_clone)
  })

  it('dispatches get_post action and updates get_post getters', async () => {
    await store.dispatch('get_post', {
      type: 'news',
      page: 1
    })

    expect(store.getters.get_post).toEqual(fake_data)
  })

  it('payload lets api know on what to get from server', async () => {
    await store.dispatch('get_post', {
      type: 'news',
      page: 1
    })
    expect(api.get).toHaveBeenCalledWith('news', '1.json')

    await store.dispatch('get_post', {
      type: 'newest',
      page: 3
    })
    expect(api.get).toHaveBeenCalledWith('newest', '3.json')

  })
})