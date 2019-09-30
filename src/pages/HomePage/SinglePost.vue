<template>
  <div>
    <a
      v-if="isArticle"
      :href="url"
      data-testid="article-link"
    >
      {{ title }}
    </a>

    <!-- clicking on title renders comment if it's not an article -->
    <router-link
      v-else
      :to="{ name: 'comment', params: {id: id} }"
      data-testid="comment-link"
    >
      {{ title }}
    </router-link>

    <br>

    <router-link
      :to="{ name: 'comment', params: {id: id} }"
      data-testid="comment-link"
    >
      Comment
    </router-link>

    <router-link
      :to="{ name: 'user', params: {user: user} }"
      data-testid="user-link"
    >
      {{ user }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    },
    points: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    user: {
      type: String,
      default: ''
    },
  },

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