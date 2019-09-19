<template>
  <div>
    <button class="button" @click="get_data">show</button>
    <post-list :posts="this.posts"></post-list>
  </div>
</template>

<script>
import PostList from './PostList'
import SinglePost from './SinglePost'
import api from '@/api'
import { mapMutations } from 'vuex'

export default {
  components: {
    PostList,
    SinglePost
  },

  data(){
    return {
      posts: null
    }
  },
  
  methods: {
    ...mapMutations([
      'SET_POST'
    ]),
    get_data(){
      console.log(this.posts)
    }
  },

  async mounted(){
    const response = await api.get('news', '1.json')
    this.posts = response.data 

    // this is kinda useless I guess...
    // this.SET_POST(response.data)
  }
}
</script>

<style>

</style>