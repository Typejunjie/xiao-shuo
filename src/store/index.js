import { createStore } from 'vuex'

export default createStore({
  state: {
    // 当前read页面数据个数与内容
    datacorrent: 0,
    readdata: [],
    // 前端项目运行端口
    defaulthttp: "localhost:8080",
    // 
  },
  mutations: {
    // 刷新read页面数据
    refresh(state, {http, params}) {
      http.then(res => {
        state.readdata = res.data;
        state.datacorrent = res.data.length;
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
    // router状态控制模块
    routerstatus: {
      state: {
        // 路由状态
        nowrouter: 'read'
      },
      mutations: {
        turnRouter(state,params) {
          state.nowrouter = params
        }
      },
    },
    // topBar状态控制模块
    topBar: {
      state: {
        // 用户核心状态
        status: 'read'
      },
      mutations: {
        turnTopBar(state, params) {
          state.status = params
        },
      }
    }

  }
})
