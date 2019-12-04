import vue from 'vue'
import vuex from 'vuex'

// 安装插件
vue.use(vuex)

const store = new vuex.Store({
  state: {
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {}
})

// 导出store对象
export default store