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
    meta: { title: 'Amanda Taylor - Portfolio'},
    component: HomeView
  },
  {
    path: '/portraits',
    name: 'graphite-portraits',
    meta: { title: 'Graphite Portraits'},
    component: Portraits
  },
  {
    path: '/coding-projects',
    name: 'coding-projects',
    meta: { title: 'Coding Projects'},
    component: Coding
  },
  {
    path: '/data-analytics',
    name: 'data-analytics',
    meta: { title: 'Data Analytics & Python'},
    component: DataProjects
  },
  {
    path: '/marketing',
    name: 'marketing-campaign',
    meta: { title: 'Marketing Campaigns'},
    component: Marketing
  },
  {
    path: '/blog',
    name: 'blog-section',
    meta: { title: 'Blog'},
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

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta.title;
  next();
});

export default router
