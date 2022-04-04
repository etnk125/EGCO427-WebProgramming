<template>
  <div class="container">
    <div class="row">
        <h2>Signin</h2>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3"/>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">
            <input type="email" v-model="formData.email" class="form-control" placeholder="email">
            <br>
            <input type="password" v-model="formData.password" class="form-control" placeholder="password">
            <br>
            <button class="btn btn-success btn-block full-width" @click="signIn">Signin</button>
        </div>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="btn-group">
          <button type="button" class="btn btn-primary">Facebook</button>
          <button type="button" class="btn btn-warning" @click="signInGoogle">Google</button>
          <button type="button" class="btn btn-info">Twitter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
export default {
    name: 'SignIn',
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
      signIn () {
            const auth = getAuth()
            signInWithEmailAndPassword(auth, this.formData.email, this.formData.password)
            .then(user => {
            this.$router.replace('/movies')
            })
            .catch(e => {
            alert(e.message)
            })
      },
      signInGoogle () {
        const provider = new GoogleAuthProvider();
        const auth = getAuth()
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                //const credential = GoogleAuthProvider.credentialFromResult(result);
                //const token = credential.accessToken;
                // The signed-in user info.
                //const user = result.user;
                this.$router.replace('/movies')

            }).catch((error) => {

                alert(error.message)

            });
      }
  },
}
</script>

<style>

</style>