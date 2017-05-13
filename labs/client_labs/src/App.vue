<template>
  <div class="app">
    <!--<img src="./assets/logo.png">-->
    <div class="wrapper" id="login-wrapper">
    <section class="login">
      <div class="row">
        <div class="col-md-6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-heading"><strong>Login</strong></div>
            <div class="panel-body">
              <form v-on:submit.prevent="handleLoginFormSubmit()">
                <div class="form-group">
                  <label>Email address</label>
                  <input
                    class="form-control"
                    placeholder="Enter your email address"
                    type="text"
                    v-model="login.email"
                  >
                </div>

                <div class="form-group">
                  <label>Password</label>
                  <input
                    class="form-control"
                    placeholder="Enter your password"
                    type="password"
                    v-model="login.password"
                  >
                </div>

                <button class="btn btn-primary">Login</button>
                <!--<router-link :to="{name: 'forgot-password'}">Forgot password</router-link>-->
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </div>
</template>

<script>
import {loginUrl} from './config'
import {clientId, clientSecret} from './env'
export default {
  name: 'app',
  data () {
    return {
      login: {
        email: 'rafik.rkn@gmail.com',
        password: 'password'
      }
    }
  },
  methods: {
    handleLoginFormSubmit () {
      const postData = {
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret,
        username: 'rafik.rkn@gmail.com',
        password: 'password',
        scope: ''
      }
      this.$http.post(loginUrl, postData)
      .then(response => {
        console.log(response)
        const header = {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + response.body.access_token
        }
        this.$http.get('http://localhost:8000/api/user', {headers: header})
        .then(response => {
          console.log(response)
        })
      })
    }
  }
}
</script>
<style lang="sass">

</style>
