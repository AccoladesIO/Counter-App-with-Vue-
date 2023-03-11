import { createRouter, createWebHistory } from 'vue-router'
import Counter from '../src/components/CounterApp.vue'
import NotFound from '../src/components/NotFound.vue'
import HomeApp from '../src/components/HomeApp.vue'

const routes = [
  {
    path: '/',
    name: 'HomeApp',
    component: HomeApp
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]
const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router
