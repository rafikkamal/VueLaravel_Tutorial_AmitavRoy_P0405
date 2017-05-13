// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
// import router from './router'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: App, name: 'home'},
  {path: '/hello', component: Hello, name: 'hello'}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router
}).$mount('#app')
