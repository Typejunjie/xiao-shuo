import { createStore } from 'vuex'

export default createStore({
  state: {
    datacorrent: 0,
    readdata: [],
  },
  mutations: {
    // 刷新read页面数据
    refresh(state, payload) {
      payload.then(res => {
        state.readdata = state.readdata.concat(res.data);
      }).catch(err => {
        throw err
      })
    }
  },
  actions: {
    // 发起异步刷新数据
    refreshdata(content, payload) {
      content.commit('refresh', payload)
    }
  },
  modules: {
  }
})
