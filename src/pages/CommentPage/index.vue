<template>
  <div>
    <p>{{ this.id }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id: this.$routes.params.id
    }
  },
}
</script>

<style>

</style>