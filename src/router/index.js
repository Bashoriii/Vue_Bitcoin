import { createRouter, createWebHistory } from 'vue-router'
import HomeBitcoin from '../views/HomeBitcoin.vue'
import IdrToBtc from '../views/IdrToBtc.vue'
import BtcToIdr from '../views/BtcToIdr.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeBitcoin
    },
    {
      path: '/idr-to-btc',
      component: IdrToBtc
    },
    {
      path: '/btc-to-idr',
      component: BtcToIdr
    }
  ]
})

export default router
