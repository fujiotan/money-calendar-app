import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MoneyView from '../views/MoneyView.vue'
import MoneyCreateView from '../views/MoneyCreateView.vue'
import MoneyEditView from '../views/MoneyEditView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component : HomeView,
      props: true
    },
    {
      path: '/money',
      name: 'money',
      component: MoneyView,
      props: true
    },
    {
      path: '/money/create',
      name: 'money-create',
      component: MoneyCreateView,
      props: true
    },
    {
      path: '/money/:id/edit',
      name: 'money-edit',
      component: MoneyEditView,
      props: true
    }
  ]
})

export default router