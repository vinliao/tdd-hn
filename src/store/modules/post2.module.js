import axios from 'axios'
import api from '@/api'

const state = {

}

const getters = {
  get_post(state) {
    return state.posts
  }
}

const mutations = {
  SET_POST(state, posts) {
    state.posts = posts
  }
}

const actions = {
  async get_post(store) {
    const response = await api.get('news', '1.json')
    store.commit('SET_POST', response.data)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}