import { createRouter, createWebHistory } from 'vue-router'
import NavLayout from '@/layouts/NavLayout.vue'
import Incomes from '@/components/Incomes.vue'
import Stocks from '@/components/Stocks.vue'
import Sales from '@/components/Sales.vue'
import Orders from '@/components/Orders.vue'

const routes = [
  {
    path: '/',
    component: NavLayout,
    children: [
      {
        path: '',
        name: 'Incomes',
        component: Incomes
      },
      {
        path: '/orders',
        name: 'Orders',
        component: Orders
      },
      {
        path: '/sales',
        name: 'Sales',
        component: Sales
      },
      {
        path: '/stocks',
        name: 'Stocks',
        component: Stocks
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
