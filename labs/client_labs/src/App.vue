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
import {loginUrl, getHeader, userUrl} from './config'
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
      const authUser = {}
      this.$http.post(loginUrl, postData)
        .then(response => {
          if (response.status === 200) {
            console.log('Oauth token', response)
            authUser.access_token = response.data.access_token
            authUser.refresh_token = response.data.refresh_token
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
            this.$http.get(userUrl, {headers: getHeader()})
              .then(response => {
                console.log('user object', response)
                authUser.email = response.body.email
                authUser.name = response.body.name
                window.localStorage.setItem('authUser', JSON.stringify(authUser))
                this.$router.push({name: 'dashboard'})
              })
          }
        })
    }
  }
}
</script>
<style lang="sass">

</style>
