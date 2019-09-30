<template>
  <div>
    <a
      v-if="isArticle"
      :href="this.url"
      data-testid="article-link"
    >{{ this.title }}</a>

    <!-- clicking on title renders comment if it's not an article -->
    <router-link
      v-else
      :to="{ name: 'comment', params: {id: this.id} }"
      data-testid="comment-link"
    >{{ this.title }}</router-link>

    <br>

    <router-link
      :to="{ name: 'comment', params: {id: this.id} }"
      data-testid="comment-link"
    >Comment </router-link>

    <router-link 
      :to="{ name: 'user', params: {user: this.user} }"
      data-testid="user-link"
    >{{ this.user }}</router-link>
  </div>
</template>

<script>
export default {
  props: ["url", "id", "user", "points", "title"],
  computed: {
    isArticle() {
      // in the api, the comments's url looks like this
      // item?id=12059125
      if (this.url.startsWith("item")) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style>
</style>