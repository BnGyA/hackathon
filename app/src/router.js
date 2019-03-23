import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/login-selector',
      name: 'selector',
      component: () => import(/* webpackChunkName: "about" */ './views/LoginSelector.vue')
    },
    {
      path: '/Category',
      name: 'Category',
      component: () => import(/* webpackChunkName: "about" */ './views/Category.vue')
    },
  ]
})
