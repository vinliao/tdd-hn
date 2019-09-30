<template>
  <div id="app">
    <button
      data-testid="home-link"
      class="button"
      @click="goHome"
    >
      Home
    </button>

    <p
      v-show="false"
      data-testid="location-display"
    >
      {{ $route.fullPath }}
    </p>

    <router-view />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "app",
  components: {},
  methods: {
    goHome() {
      this.$router.push("/");
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
