import Home from '@/pages/pageStates/Home'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'
import getters from './getters'


/**
 * Holds all game objects and state.
 * Should only be used for data that needs to be used by many components.
 * If a component needs to keep track of something keep it in the component and
 * pass it out if and when it is necessary.
 * ie) player information in GameSetup.
 */
export const store = new Vuex.Store({
  state: {
    gameState: 'home',
    showBackstory: true,
    pageState: new Home()
  },

  getters,
  mutations,
  actions
})
