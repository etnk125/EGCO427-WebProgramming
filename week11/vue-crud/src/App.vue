<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <nav>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/helloworld">HelloWorld</router-link>
    <router-link to="/article">Article</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {
    // HelloWorld,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  gap: 4px;
  justify-content: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>