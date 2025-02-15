import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import WorkCollection from '@/pages/WorkCollection.vue'
import Recommend from '@/pages/Recommend.vue'
import NotCompleted from '@/pages/NotCompleted.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/collections',
      name: 'collections',
      component: WorkCollection,
      redirect: '/notCompleted',
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend,
      redirect: '/notCompleted',
    },
    {
      path: '/notCompleted',
      name: 'notCompleted',
      component: NotCompleted
    }
  ]
})

export default router
