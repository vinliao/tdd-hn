<template>
  <div id="app">
    <button
      class="button"
      @click="goHome"
      data-testid="home-link"
    >Home</button>

    <p
      v-show="false"
      data-testid="location-display"
    >{{ $route.fullPath }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
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
