import Vue from 'vue'
import Vuex from 'vuex'
import postData from './modules/postData'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    postData,
  }
});