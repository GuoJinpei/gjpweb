import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home')
const Category = () => import('views/category')
const page404 = () => import('views/404')

// 1.安装插件
Vue.use(VueRouter)

// 创建router
const routers = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '*',
    component: page404
  },
]
const router = new VueRouter({
  routers,
  mode: 'history'
})


export default router