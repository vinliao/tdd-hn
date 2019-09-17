<template>
  <div>
    <p>single post</p>
    <p>{{ author }}</p>
    <p>{{ points }}</p>
    <a :href="link">{{ title }}</a>
  </div> 
</template>

<script>
export default {
  name: 'single-post',
  props: ['author', 'points', 'title', 'link']
}
</script>

<style>

</style>