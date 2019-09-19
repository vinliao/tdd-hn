<template>
  <div>
    <single-post v-for="post in this.posts"
      :key="post.id"
      :author="post.user"
      :link="post.link"
      :title="post.title"
      :points="post.points"
    ></single-post>
  </div>
</template>

<script>
import SinglePost from './SinglePost'

export default {
  name: 'post-list',
  components: {
    SinglePost
  },
  data(){
    return {

    }
  },

  props: ['posts'],
}
</script>

<style>

</style>