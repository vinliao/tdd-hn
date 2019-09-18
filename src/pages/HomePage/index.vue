<template>
  <div>
    <post-list></post-list>
    <button class="button" @click="get_something">test get</button>
  </div>
</template>

<script>
import PostList from './PostList'
import api from '@/api'

export default {
  components: {
    PostList
  },
  methods: {
    async get_something(){
      const response = await api.get('news', '1.json')
      console.log(response)
    }
  }
}
</script>

<style>

</style>