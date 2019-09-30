<template>
  <div>
    <p>this is user page!</p>
    <p>{{ this.user }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    user(){
      return this.$route.params.user
    }
  }
}
</script>

<style>

</style>