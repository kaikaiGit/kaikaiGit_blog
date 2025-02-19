import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import WorkCollection from '@/pages/WorkCollection.vue'
import RecommendWork from '@/pages/RecommendWork.vue'
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
      children: []
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: RecommendWork,
      redirect: '/notCompleted',
      children: []
    },
    {
      path: '/notCompleted',
      name: 'notCompleted',
      component: NotCompleted
    }
  ]
})

export default router
