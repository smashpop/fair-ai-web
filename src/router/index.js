/**
 * router/index.ts
 *
 * This file is used to register all routes
 * Documentation: https://router.vuejs.org/
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'introduce',
        name: 'Introduce',
        component: () => import('@/views/introduce/index.vue')
      },
      {
        path: 'archive',
        name: 'Archive',
        component: () => import('@/views/archive/index.vue')
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('@/views/news/index.vue')
      },
      {
        path: 'suggest',
        name: 'Suggest',
        component: () => import('@/views/suggest/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
