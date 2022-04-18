<template>
  <p v-for="message in errMessages">{{message.message||"something went wrong"}}</p>
</template>

<script>
import store from "../store";
export default {
  computed: {
    errMessages() {
      return store.errMessages;
    },
  },
};
</script>

<style scoped>
p {
  background-color: pink;
}
</style>