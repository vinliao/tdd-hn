<template>
  <div>
    <p>this is home page</p>
    <p>{{ this.value }}</p>
    <button @click="goMethod" class="button" id="goButton">Go!</button>

  </div>
</template>

<script>
export default {
  data(){
    return {
      value: null,
    }
  },
  mounted(){
    console.log('hey it is mounted')
  },
  methods: {
    goMethod(){
      this.value = 'Hello my friend'
    },
  }
}
</script>

<style>

</style>