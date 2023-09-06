import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/src/views/AboutView.vue',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/src/views/AdminView.vue',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/src/views/EditProductView.vue',
    name: 'edit',
    component: () => import('../views/EditProductView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
