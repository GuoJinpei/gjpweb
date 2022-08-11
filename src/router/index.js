import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './home'
import Login from './login'

Vue.use(VueRouter)

const routes = [
  ...home,
  ...Login,
  {
    path: '*',
    component: () => import('@/views/404')
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router