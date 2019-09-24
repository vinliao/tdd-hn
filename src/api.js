import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

const api = {
  // pass in a vue instance then use axios on it
  init(){
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = 'https://api.hnpwa.com/v0/'
  },

  async get(resource, slug=''){
    // resource list:
    // news, newest, ask, show, jobs, item, user

    try{
      return await Vue.axios.get(`${resource}/${slug}`)
    }catch(err){
      throw new Error(err)
    }
  },
}

export default api