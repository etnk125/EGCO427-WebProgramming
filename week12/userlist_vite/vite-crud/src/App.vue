<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <nav>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/adduser">AddUser</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
</style>