<template>
  <div class="container">
    <form>
      <div class="well">
        <h4>Add User</h4>
        <div class="form-group">
          <label class="pull-left">First Name:</label>
          <input type="text" class="form-control" placeholder="First Name" v-model="User.firstName" />
        </div>
        <div class="form-group">
          <label class="pull-left">Last Name:</label>
          <input type="text" class="form-control" placeholder="Last Name" v-model="User.lastName" />
        </div>
        <div class="form-group">
          <label class="pull-left">Email:</label>
          <input type="text" class="form-control" placeholder="Email" v-model="User.email" />
        </div>
      </div>

      <button
        type="submit"
        class="btn btn-large btn-block btn-primary full-width"
        @click="addToAPI"
      >Submit</button>
      <router-link to="/">
        <button class="btn btn-large btn-block btn-success full-width">Go to User List Page</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddUser",
  data() {
    return {
      User: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },
  methods: {
    addToAPI() {
      axios
        .post("http://localhost:5001/users", this.User)
        .then((resp) => {
          console.log(resp);
          this.User = resp.data;
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>


<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>