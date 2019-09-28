<template>
  <div>
    <single-comment v-for="comment in this.comments"
      :key="comment.id" 
      :content="comment.content" 
    ></single-comment>
  </div>
</template>

<script>
import api from '@/api'
import SingleComment from './SingleComment'

export default {

  data(){
    return {
      comments: null
    }
  },
  async mounted(){
    const itemId = this.$route.params.id
    this.comments = await api.get('item', itemId + '.json')

  },
  components: {
    SingleComment
  },
  methods: {
    depthFirstComment(){
      return null
    }
  }

}
</script>

<style>

</style>