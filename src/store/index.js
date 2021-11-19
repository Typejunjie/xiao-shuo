import { createStore } from 'vuex'

export default createStore({
  state: {
    datacorrent: 0,
    readdata: [],
  },
  mutations: {
    refresh(state, payload) {
      console.log(state,payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
