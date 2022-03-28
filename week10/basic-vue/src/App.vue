<script>
import Learn1 from "./components/Learn1.vue";
import Learn2 from "./components/Learn2.vue";
import Titlecase from "./components/Title.vue";
export default {
  name: "App",
  components: {
    Learn1,
    Learn2,
    Titlecase,
  },
};
</script>

<template>
  <main>
    <Learn2 />
    <Learn1 />
    <Titlecase />
  </main>
</template>

