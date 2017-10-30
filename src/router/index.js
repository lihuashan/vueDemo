import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import WaterListPage from '@/pages/WaterListPage'
import LiquefiedPetroleumGasPage from '@/pages/LiquefiedPetroleumGasPage'
import LiquefiedOrderList from '@/pages/LiquefiedOrderList'
import WaterOrderList from '@/pages/WaterOrderList'
import FoodStuffPage from '@/pages/FoodStuffPage'
import FoodStuffOrderList from '@/pages/FoodStuffOrderList'
import OilPage from '@/pages/OilPage'
import OilOrderList from '@/pages/OilOrderList'
import WinePage from '@/pages/WinePage'
import WineOrderList from '@/pages/WineOrderList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/LiquefiedPetroleumGasPage',
      name: 'LiquefiedPetroleumGasPage',
      component: LiquefiedPetroleumGasPage
    },
    {
      path: '/WaterListPage',
      name: 'WaterListPage',
      component: WaterListPage
    },
    {
      path: '/FoodStuffPage',
      name: 'FoodStuffPage',
      component: FoodStuffPage
    },
    {
      path: '/LiquefiedOrderList',
      name: 'LiquefiedOrderList',
      component: LiquefiedOrderList
    },
    {
      path: '/WaterOrderList',
      name: 'WaterOrderList',
      component: WaterOrderList
    },
    {
      path: '/FoodStuffOrderList',
      name: 'FoodStuffOrderList',
      component: FoodStuffOrderList
    },
    {
      path: '/OilPage',
      name: 'OilPage',
      component: OilPage
    },
    {
      path: '/OilOrderList',
      name: 'OilOrderList',
      component: OilOrderList
    },
    {
      path: '/WinePage',
      name: 'WinePage',
      component: WinePage
    },
    {
      path: '/WineOrderList',
      name: 'WineOrderList',
      component: WineOrderList
    }
  ]
})
