<template>
  <h1>
    {{ titlecase(message) }}
    title
  </h1>
  <hr />
</template>

<script>
const Titlecase = {
  data() {
    return {
      message: "this is message",
      greeting: "hello this is greeting!",
    };
  },
  methods: {
    titlecase: function (value = "", separator = " ") {
      // value = value.toString();

      return value
        .toString()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(separator);
    },
  },
};

export default Titlecase;
</script>
