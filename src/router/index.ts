import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MoneyView from '../views/MoneyView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component : HomeView
    },
    {
      path: '/money',
      name: 'money',
      component: MoneyView
    }
  ]
})

export default router