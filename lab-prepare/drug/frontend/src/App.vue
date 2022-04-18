<template>
  <TheNavbar :contents="contents" />
  <ErrorBound />
  <router-view />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import ErrorBound from "./components/ErrorBound.vue";

export default {
  name: "App",
  data() {
    return {
      contents: [
        { pathname: "EGCO427", path: "/" },
        { pathname: "Home", path: "/" },
      ],
    };
  },
  components: {
    TheNavbar,
    ErrorBound,
  },
};
</script>