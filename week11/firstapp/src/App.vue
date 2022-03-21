<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <!-- <SearchForm /> -->
  <MyForm />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import SearchForm from "./views/SearchForm.vue";
import MyForm from "./views/MyForm.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    // SearchForm,
    MyForm,
  },
};
</script>
