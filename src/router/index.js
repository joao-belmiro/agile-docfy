import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'scrum',
    component: () => import('../views/scrum.vue')
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: () => import('../views/kanban.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
