import { createRouter, createWebHistory, START_LOCATION } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import { uxProjects } from '@/data/uxProjects'
import { waitForPageLeave } from './scrollSignal'

async function waitForElement(selector: string) {
  for (let i = 0; i < 60 && !document.querySelector(selector); i++) {
    await new Promise((resolve) => requestAnimationFrame(resolve))
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('@/views/WorkPage.vue'),
    },
    {
      path: '/creative',
      name: 'creative',
      component: () => import('@/views/CreativePage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/work/ux-ui/ui-studies',
      name: 'work-ux-ui-studies',
      component: () => import('@/views/work/UiStudiesPage.vue'),
    },
    {
      path: '/work/ux-ui/:slug',
      name: 'work-ux-ui-project',
      component: () => import('@/views/work/ProjectPage.vue'),
      props: true,
      beforeEnter: (to) => uxProjects.some((p) => p.slug === to.params.slug) || { path: '/work' },
    },
    { path: '/work/design', redirect: '/creative' },
    { path: '/work/dev', redirect: '/work' },
    { path: '/work/:pathMatch(.*)*', redirect: '/work' },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  async scrollBehavior(to, from, savedPosition) {
    if (from !== START_LOCATION && from.path !== to.path) await waitForPageLeave()
    if (savedPosition) return savedPosition
    if (to.hash) {
      await waitForElement(to.hash)
      const desktop = window.matchMedia('(min-width: 1024px)').matches
      return { el: to.hash, top: desktop ? 32 : 80 }
    }
    return { top: 0 }
  },
})

export default router
