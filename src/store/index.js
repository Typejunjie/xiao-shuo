import { createStore } from 'vuex'
const testip = require('../api/testmodelip.js')

export default createStore({
  state: {
    // 当前read页面数据个数与内容
    datacorrent: 0,
    readdata: [],
    // 前端项目运行端口
    defaulthttp: testip.ip + ':8080',
    // 删除等待
    _deletewait: false
  },
  mutations: {
    // 刷新read页面数据
    refresh(state, { http }) {
      http.then(res => {
        state.readdata = res.data;
        state.datacorrent = state.readdata.length;
      }).catch(err => {
        throw err
      })
    },
    // 删除对应数据
    deleteData(state, { http, num }) {
      http.then(res => {
        if (res.data == '删除成功') {
          console.log(res.data);
          state.readdata.splice(num, 1)
        } else {
          console.log(res.data);
        }
        state.datacorrent = state.readdata.length;
        state._deletewait = false;
      }).catch(err => {
        throw err
      })
    },
    // 修改数据,请求处理
    revise(state, { http }) {
      http.then(res => {
        if (res.data == '修改成功') {
          console.log(res.data);
        } else {
          console.log(res.data);
        }

      }).catch(err => {
        throw err
      })
    },
    // 修改deletewait
    _delete(state) {
      state._deletewait = true
    }
  },
  actions: {
    // 发起异步刷新数据
    refreshdata(content, http) {
      content.commit('refresh', http)
    },
    // 发起异步删除数据
    deleteData(content, http) {
      content.commit('deleteData', http)
    },
    // 发起异步修改数据
    reviseData(content, http) {
      content.commit('revise', http)
    },
  },
  modules: {
    // router状态控制模块
    routerstatus: {
      state: {
        // 路由状态
        nowrouter: 'read',
      },
      mutations: {
        turnRouter(state, params) {
          state.nowrouter = params
        },
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
