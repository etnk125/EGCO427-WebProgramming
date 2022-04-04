<template>
  <div class="container">
    <h1>Signin</h1>
    <br />
    <br />
    <div class="row">
      <div class="col-lg-3" />
      <div class="col-lg-6">
        <input type="email" v-model="formData.email" class="form-control" placeholder="email" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="password"
          v-model="formData.password"
          class="form-control"
          placeholder="password"
        />
        <br />
        <button class="btn btn-success btn-block full-width" @click="signIn">Sign In</button>
        <button
          class="btn btn-warning btn-block full-width"
          @click="signInGoogle"
        >Sign In with Google</button>
      </div>
      <div class="col-lg-3" />
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
export default {
  name: "SignIn",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        this.formData.email,
        this.formData.password
      )
        .then((user) => {
          this.$router.replace("/users");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    signInGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((res) => {
          const credential = GoogleAuthProvider.credentialFromResult(res);
          const token = credential.accessToken;
          const user = res.user;
          this.$router.replace("/users");
        })
        .catch((err) => alert(err.message));
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
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>