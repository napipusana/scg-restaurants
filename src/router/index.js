import Vue from 'vue'
import Router from 'vue-router'
import SearchRestaurants from '@/components/SearchRestaurants'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchRestaurants',
      component: SearchRestaurants
    },
  ]
})
