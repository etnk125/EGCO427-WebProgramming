<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TheNavbar :contents="contents" />
  <router-view />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";

export default {
  name: "App",
  data() {
    return {
      contents: [
        { pathname: "home", path: "/" },
        { pathname: "main", path: "/main" },
        { pathname: "about", path: "/about" },
      ],
    };
  },
  components: {
    TheNavbar,
  },
};
</script>
