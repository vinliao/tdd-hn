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
  async get_post(store, payload) {
    const type = payload.type
    const page = String(payload.page) + '.json' //e.g., "2.json"
    const response = await api.get(type, page)
    store.commit('SET_POST', response.data)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}