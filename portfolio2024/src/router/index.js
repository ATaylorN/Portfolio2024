import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Portraits from '../views/PortraitsView.vue'
import Coding from '../views/CodingView.vue'
import DataProjects from '../views/DataView.vue'
import Marketing from '../views/MarketingView.vue'
import Blog from '../views/BlogView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portraits',
    name: 'graphite-portraits',
    component: Portraits
  },
  {
    path: '/coding-projects',
    name: 'coding-projects',
    component: Coding
  },
  {
    path: '/data-analytics',
    name: 'data-analytics',
    component: DataProjects
  },
  {
    path: '/marketing',
    name: 'marketing-campaign',
    component: Marketing
  },
  {
    path: '/blog',
    name: 'blog-section',
    component: Blog
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
