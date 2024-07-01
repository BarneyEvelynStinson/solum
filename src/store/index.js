import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userEmail: '',
    isEmailValid: false,
    count: 0,
  },
  getters: {
    getUserEmail: state => state.userEmail,
    getUserValid: state => state.isEmailValid,
    getCount: state => state.count,
  },
  mutations: {
    SET_EMAIL: (state, newEmail) => {
      state.userEmail = newEmail;
    },
    SET_EMAIL_VALID: (state, payload) => {
      state.isEmailValid = payload;
    },
    SET_COUNT: (state, payload) => {
      state.count += payload;
    }
  },
  actions: {
    setEmail: ({ commit }, newEmail) => {
      commit('SET_EMAIL', newEmail);
    },
    setEmailValid: ({commit}, payload) => {
      commit('SET_EMAIL_VALID', payload);
    },
    updateCount: ({commit}, payload) => {
      commit('SET_COUNT', payload);
    }
  },
  modules: {
  }
})
