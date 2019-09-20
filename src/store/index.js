import Vue from 'vue'
import Vuex from 'vuex'
import PostStore from './modules/post.module.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    PostStore,
  }
});