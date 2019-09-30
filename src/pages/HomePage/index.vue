<template>
  <div v-if="posts">
    <single-post
      v-for="post in posts.data"
      :id="post.id"
      :key="post.id"
      :user="post.user"
      :points="post.points"
      :url="post.url"
      :title="post.title"
    />
  </div>
</template>

<script>
import api from '@/api'
import SinglePost from './SinglePost'

export default {
  components: {
    SinglePost
  },
  data(){
    return {
      posts: null,
    }
  },
  async mounted(){
    this.posts = await api.get('news', '1.json')
  },
}
</script>

<style>
</style>