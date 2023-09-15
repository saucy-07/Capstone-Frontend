import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'

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
  {
    path: '/src/views/AddProductsView.vue',
    name: 'add',
    component: () => import('../views/AddProductsView.vue')
  },
  {
    path: '/src/views/:id/EditProductView.vue',
    name: 'editproducts',
    component: () => import('../views/EditProductView.vue')
  },
  {
    path: '/src/views/ProductsView.vue',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/src/views/AddUsersView.vue',
    name: 'addUsers',
    component: () => import('../views/AddUsersView.vue')
  },
  {
    path: '/src/views/WishListView.vue',
    name: 'wishlist',
    component: () => import('../views/WishListView.vue')
  },
  {
    path: '/src/views/LogInView.vue',
    name: 'login',
    component: () => import('/src/views/LogInView.vue')
  },
  {
    path: '/src/views/SignUpView.vue',
    name: 'signUp',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/src/views/CheckoutView.vue',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/src/views/CartView.vue',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/src/views/PrivacyPolicyView.vue',
    name: 'privacyPolicy',
    component: () => import('../views/PrivacyPolicyView.vue')
  },
  {
    path: '/src/views/T&CsView.vue',
    name: 't&cs',
    component: () => import('../views/T&CsView.vue')
  },
  {
    path: '/src/views/ContactView.vue',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
