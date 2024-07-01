import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/dashboard',
    name: 'HomePage',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      console.log('to', to, from)
      if(store.state.isEmailValid) {
        next();
      } else {
        next('/');
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
