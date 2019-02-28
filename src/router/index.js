import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld =()=>import( '@/components/HelloWorld')
const Login =()=>import('@/components/Login')
const Home =()=>import('@/components/Home')

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
