<template>
  <div v-if="this.posts">
    <single-post
      v-for="post in this.posts.data"
      :key="post.id"
      :id="post.id"
      :user="post.user"
      :points="post.points"
      :url="post.url"
      :title="post.title"
    ></single-post>
  </div>
</template>

<script>
import api from '@/api'
import SinglePost from './SinglePost'

export default {
  data(){
    return {
      posts: null,
      fake_data: [
        { title: 'title number 1', url: 'http://title1.com' },
        { title: 'title number 2', url: 'http://title2.com' }]
    }
  },
  async mounted(){
    this.posts = await api.get('news', '1.json')
    // console.log(this.posts.data)
  },
  methods: {
  },
  components: {
    SinglePost
  }

}
</script>

<style>
</style>