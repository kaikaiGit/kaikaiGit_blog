import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import WorkCollection from '@/pages/WorkCollection.vue'
import Recommend from '@/pages/Recommend.vue'

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
      component: WorkCollection
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    }
  ]
})

export default router
