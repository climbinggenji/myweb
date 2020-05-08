import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/error',
    name: 'error',
    component:  resolve => require(['@/views/error.vue'], resolve)
  },
  {
    path: '/project',
    name: 'Project',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue')
  },
  {
    path: '/snake',
    name: 'Snake',
    component: resolve => require(['@/views/projects/snake.vue'], resolve)
  },
  {
    path: '/echarts-lolsth',
    name: 'echarts-lolsth',
    component: resolve => require(['@/views/projects/echarts-lolsth.vue'], resolve)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
