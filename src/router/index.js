import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: load('Home'),
    meta: {
      unguarded: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: load('About')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

export default router
