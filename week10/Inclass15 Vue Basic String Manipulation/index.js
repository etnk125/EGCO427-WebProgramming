const App = {
  data() {
    return {
      message: "this is message!",
      ex1: "this is titlecased message!",
      ex2: "this is titlecased message without space!",
    };
  },
  methods: {
    uppercase: function (word = "", separator = " ") {
      return word
        .toString()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(separator);
    },
  },
};

Vue.createApp(App).mount("#data");
