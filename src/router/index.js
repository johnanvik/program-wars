import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/components/landingPage/LandingPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    canReuse: false,
    component: LandingPage
  },
  {
    path: '/game',
    name: 'Game',
    canReuse: false,
    component: () => import('@/components/game/Game.vue')
  },
  {
    path: '/agile_setup',
    name: 'Agile Setup',
    canReuse: false,
    component: () => import('@/components/game/AgileSetup.vue')
  },
  {
    path: '/deck_setup',
    name: 'Deck Setup',
    canReuse: false,
    component: () => import('@/components/game/DeckSetup.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
