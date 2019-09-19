import axios from 'axios'
import api from '@/api'

const state = {

}

const getters = {
}

const mutations = {
  SET_POST(state, posts){
    state.posts = posts
  }
}

const actions = {
  async get_post(store) {
    // this axios get is using the mock that is present on the postData.spec.js
    // const response = await axios.get('https://api.hnpwa.com/v0/news/1.json')
    const response = await api.get('news', '1.json')
    store.commit('SET_POST', { post_id: response[0].id })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}