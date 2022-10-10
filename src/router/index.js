import { createRouter, createWebHistory } from 'vue-router'
import ExecuteCrawler from '@/components/ExecuteCrawler.vue'
import PatternCreate from '@/components/PatternCreate.vue'

const routes = [
  {
    path: '/',
    name: 'ExecuteCrawler',
    component: ExecuteCrawler
  },
  {
    path: '/pattern/create',
    name: 'PatternCreate',
    component: PatternCreate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router