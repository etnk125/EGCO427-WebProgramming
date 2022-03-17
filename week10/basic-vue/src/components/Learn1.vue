<template>
  <h1>
    {{ getName().name }}
  </h1>
  <h1>
    {{ getName("moded", "name").name }}
  </h1>
  <h1>
    {{ uppercase("this is uppercase") }}
  </h1>
</template>


<script>
const Learn = {
  data() {
    return {
      fname: "bob",
      lname: "cat",
    };
  },
  methods: {
    getName: function (fname = this.fname, lname = this.lname) {
      return {
        name: fname + " " + lname,
      };
    },
    uppercase: function (value = "") {
      return value.toString().toUpperCase();
    },
  },
};

export default Learn;
</script>