import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home')
const Category = () => import('views/category')

// 1.安装插件
Vue.use(VueRouter)

// 创建router
const routers = [
  {
    path: '',
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
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router