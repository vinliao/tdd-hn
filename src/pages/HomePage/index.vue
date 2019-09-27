<template>
  <div>
    <button class="button" @click="pushTo">push!</button>
    <post-list :posts="this.posts"></post-list>
  </div>
</template>

<script>
import PostList from './PostList'
import SinglePost from './SinglePost'
import api from '@/api'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home-page',
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
    ...mapActions([
      'get_post'
    ]),
    pushto(){
      this.$router.push('comment/3')
    }
  },

  async mounted(){
    await this.get_post({
      type: 'news',
      page: 1
    })

    this.posts = this.$store.getters.get_post
  }
}
</script>

<style>

</style>