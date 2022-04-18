<template>
  <nav>
    <router-link v-for="content in contents" :to="content.path">{{content.pathname}}</router-link>
  </nav>
  <hr />
</template>

<script>
export default {
  props: {
    contents: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
nav {
  display: flex;
  /* justify-content: center; */
  gap: 5px;
}
a {
  margin: 1rem;
  margin-bottom: 0;
  text-decoration: none;
}
</style>