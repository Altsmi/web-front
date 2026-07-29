import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue') // Lazy-loaded for performance
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue') // Lazy-loaded for performance
    }
  ]
})

export default router
