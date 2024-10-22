import { createRouter, createWebHistory } from 'vue-router'
import TasksShow from '@/views/TasksShow.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:TasksShow
    },
  ]
})

export default router
