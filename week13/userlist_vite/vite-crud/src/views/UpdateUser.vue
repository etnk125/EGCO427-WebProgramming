<template>
  <div class="container">
    <form>
      <div class="well">
        <h4>update User</h4>
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

      <router-link to="/">
        <button
          type="submit"
          class="btn btn-large btn-block btn-primary full-width"
          @click="updateToAPI"
        >Submit</button>
      </router-link>
      <router-link to="/">
        <button class="btn btn-large btn-block btn-success full-width">Go to User List Page</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UpdateUser",
  data() {
    return {
      User: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },
  mounted() {
    axios
      .get("http://localhost:5001/users/" + this.$route.params.userId)
      .then((res) => {
        this.User = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    updateToAPI() {
      axios
        .post(
          "http://localhost:5001/users/" + this.$route.params.userId,
          this.User
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>