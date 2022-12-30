import state from './state.js'
import actions from './actions'
import getters from './getters.js'
import mutations from './mutations.js'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})