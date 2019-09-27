<template>
  <div>
    <p>single post</p>
    <p>{{ author }}</p>
    <p>{{ points }}</p>
    <a :href="url">{{ title }}</a>
    <!-- <router-link to="{ path: 'home', params: {id: this.id} }">go to comment</router-link> -->
  </div> 
</template>

<script>
export default {
  name: 'single-post',
  props: ['author', 'points', 'title', 'url', 'id']
}
</script>

<style>

</style>