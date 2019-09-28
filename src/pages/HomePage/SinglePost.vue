<template>
  <div>
    <a 
      :href="this.url"
      data-testid="article-link"
    >{{ title }}</a>
  </div>
</template>

<script>
export default {
  props: ["url", "id", "user", "points", "title"]
};
</script>

<style>
</style>