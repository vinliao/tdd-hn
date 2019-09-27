<template>
  <div>
    <p>{{ this.id }}</p>
    <button class="button" @click="showId">show me the id!</button>
  </div>
</template>

<script>
export default {
  name: 'comment-page',
  data(){
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    showId(){
      console.log(this.id)
    }
  }
}
</script>

<style>

</style>