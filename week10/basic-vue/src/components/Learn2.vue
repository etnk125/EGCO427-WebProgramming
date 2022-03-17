<template>
  <h1>
    {{ message }}
  </h1>
  <p>
    {{ age > 60 ? "old" : "yousng" }}
  </p>
  <p>{{ counter }}</p>
</template>


<script>
const Learn = {
  data() {
    return {
      message: "Learn",
      age: 60,
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
};

export default Learn;
</script>