<template>
  <div>
    <single-comment
      v-for="comment in comments"
      :key="comment.id"
      :content="comment.content"
    />
  </div>
</template>

<script>
import api from "@/api";
import SingleComment from "./SingleComment";

export default {
  components: {
    SingleComment
  },
  data() {
    return {
      comments: []
    };
  },
  async mounted() {
    const itemId = this.$route.params.id;
    const response = await api.get("item", itemId + ".json");
    this.setComments(response.data.comments);
  },
  methods: {
    setComments(rawComments) {
      // set comments using dfs, turning tree into an array
      for (let i = 0; i < rawComments.length; i++) {
        const currComments = rawComments[i];
        this.comments.push(currComments);

        if (currComments.comments) {
          this.setComments(currComments.comments);
        }
      }
    }
  }
};
</script>

<style>
</style>