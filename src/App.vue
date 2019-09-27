<template>
  <div id="app">
    <router-link
      to='/comment/3'
      data-testid="comment-link"
    >go to comment number 3</router-link>

    <p data-testid="location-display">{{ $route.fullPath }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
