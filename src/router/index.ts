import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MoneyView from '../views/MoneyView.vue'
import MoneyCreateView from '../views/MoneyCreateView.vue'

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
    },
    {
      path: '/create',
      name: 'create',
      component: MoneyCreateView
    }
  ]
})

export default router