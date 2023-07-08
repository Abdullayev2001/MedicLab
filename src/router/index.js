import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    // {
    //   path:'/about',
    //   name:'About',
    //   component:() => import('../views/Catalog/')
    // },
    // {
    //   path:'/catalog',
    //   name:'Catalog',
    //   component:Home
    // },
    // {
    //   path:'/partners',
    //   name:'Partners',
    //   component:Home
    // },
    // {
    //   path:'/blog',
    //   name:'Blog',
    //   component:Home
    // },
    // {
    //   path:'/contact',
    //   name:'Contact',
    //   component:Home
    // },
  ]
})

export default router
