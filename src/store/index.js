import { createStore } from 'vuex'

export default createStore({
  state: {
    datacorrent: 0,
    readdata: [],
    defaulthttp: "192.168.0.101:8080",
  },
  mutations: {
    // 刷新read页面数据
    refresh(state, {http, params}) {
      http.then(res => {
        state.readdata = state.readdata.concat(res.data);
        state.datacorrent += params.corrent;
      }).catch(err => {
        throw err
      })
    }
  },
  actions: {
    // 发起异步刷新数据
    refreshdata(content, http, params) {
      content.commit('refresh', http, params)
    }
  },
  modules: {
  }
})
