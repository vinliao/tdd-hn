<template>
  <div>
    <p data-testid="comment-content">
      {{ this.content }}  
    </p>   
  </div> 
</template>

<script>
export default {
  props: ['content']
}
</script>

<style>

</style>