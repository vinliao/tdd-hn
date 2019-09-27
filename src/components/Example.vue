<template>
  <div>
    <p>
      Clicks: {{ this.click }}
    </p>

    <button
      class="button"
      @click="incrementClick"
    >increment!</button>

    <button
      class="button"
      @click="showMsg"
    >show</button>
    <p v-if="showMsgStatus">some text!</p>

    <button
      data-testid="coolbutton123"
      @click="showMsg"
    >data id!</button>

    <!-- <section>
      <b-field label="Name">
        <b-input v-model="personName" placeholder="Type in your name"></b-input>
      </b-field>
      <button class="button" @click="welcomePerson">Enter!</button>
      <p>{{ welcomeMsg }}</p>
    </section> -->

    <form @submit.prevent="">
      <input
        type="text"
        v-model="personName"
        placeholder="Type in your name"
      >
      <input
        type="submit"
        value="Enter!"
        @click="welcomePerson"
      >
      <p>{{ welcomeMsg }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      click: 0,
      showMsgStatus: false,
      personName: null,
      welcomeMsg: null
    };
  },
  methods: {
    incrementClick() {
      this.click++;
    },
    showMsg() {
      this.showMsgStatus = true;
    },
    welcomePerson() {
      this.welcomeMsg = `Hello there ${this.personName}`;
    }
  }
};
</script>

<style>
</style>