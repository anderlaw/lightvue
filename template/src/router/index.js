import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    }
  ]
})
