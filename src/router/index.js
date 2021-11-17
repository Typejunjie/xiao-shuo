import { createRouter, createWebHistory } from 'vue-router'

const write = ()=> import('views/write')
const read = ()=> import('views/read')

const routes = [
  {
    path: '',
    redirect: 'read'
  },
  {
    path: '/read',
    component: read
  },
  {
    path: '/write',
    component: write
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
