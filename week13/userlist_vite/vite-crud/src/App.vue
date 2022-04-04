<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Home">Home</router-link>|
      <router-link to="/users">List of Users</router-link>|
      <router-link to="/About">About</router-link>|
      <button class="btn btn-success btn-block full-width" @click="logout">Logout</button>
    </div>
    <router-view />
  </div>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  name: "App",
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$router.replace("/signin");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
