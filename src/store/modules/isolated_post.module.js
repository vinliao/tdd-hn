import axios from 'axios'
import api from '@/api'

const state = {

}

const getters = {
  get_post(state){
    const start = state.current_page * state.post_length
    const end = (state.current_page + 1) * state.post_length

    return state.posts.slice(start, end)
  },
  get_max_page(state){
    const all_post_length = state.posts.length
    return Math.ceil(all_post_length / state.post_length)
  },
  get_all_post(state){
    console.log(state.posts)
    return state.posts
  }
}

const mutations = {
  SET_POST(state, posts) {
    state.posts = posts
  },
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