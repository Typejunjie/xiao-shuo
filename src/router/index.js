import { createRouter, createWebHistory } from 'vue-router'

const write = ()=> import('views/write')
const read = ()=> import('views/read')
const user = ()=> import('views/userview')

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
  },
  {
    path: '/user',
    component: user
  }
]


// 将路由模型创建，并修改默认设置
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
