import { createRouter, createWebHistory, START_LOCATION } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutView from '@/views/AboutView.vue'
import WorkView from '@/views/WorkView.vue'
import { uxProjects } from '@/data/uxProjects'
import { waitForPageLeave } from './scrollSignal'

declare module 'vue-router' {
  interface RouteMeta {
    footer?: 'default' | 'aboutFooter'
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { footer: 'default' },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { footer: 'aboutFooter' },
    },
    {
      path: '/work',
      component: WorkView,
      redirect: '/work/ux-ui',
      meta: { footer: 'default' },
      children: [
        {
          path: 'ux-ui',
          children: [
            {
              path: '',
              name: 'work-ux-ui',
              component: () => import('@/views/work/UxUiSection.vue'),
            },
            {
              path: ':slug',
              name: 'work-ux-ui-project',
              component: () => import('@/views/work/ProjectPage.vue'),
              props: true,
              beforeEnter: (to) =>
                uxProjects.some((p) => p.slug === to.params.slug) || '/work/ux-ui',
            },
          ],
        },
        {
          path: 'design',
          name: 'work-design',
          component: () => import('@/views/work/DesignSection.vue'),
        },
        {
          path: 'dev',
          name: 'work-dev',
          component: () => import('@/views/work/DevSection.vue'),
        },
        {
          path: ':pathMatch(.*)*',
          redirect: '/work/ux-ui',
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  async scrollBehavior(to, from, savedPosition) {
    if (from !== START_LOCATION) await waitForPageLeave()
    return savedPosition ?? { top: 0 }
  },
})

export default router
