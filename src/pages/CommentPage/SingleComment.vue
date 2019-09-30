<template>
  <div>
    <p 
      data-testid="comment-content"
    >
      {{ content }}  
    </p>   
  </div> 
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>