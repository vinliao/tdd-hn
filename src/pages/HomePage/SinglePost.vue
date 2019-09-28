<template>
  <div>
    <a
      :href="this.url"
      data-testid="article-link"
    >{{ title }}</a>

    <br>

    <!-- use params instead of query! -->
    <router-link
      :to="{ path: 'comment/' + String(id) }"
      data-testid="comment-link"
    >Comment</router-link>
  </div>
</template>

<script>
export default {
  props: ["url", "id", "user", "points", "title"]
};
</script>

<style>
</style>