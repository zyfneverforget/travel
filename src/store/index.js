import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
    city: localStorage.city ||'深圳'
  },
  mutations: {
    changeCity (state,name) {
			state.city = name
			localStorage.city = name
    }
  }
})