/* 
遗留问题
使用内联样式触发transition
点击后将占用全宽且显示历史记录栏

解决问题
默认输入框的边框
 */

<template>
  <div :style="act()" class="box">
    <input
      type="text"
      placeholder="搜索"
      @touchend="input"
      @keydown.enter="search"
      v-model="searchvalue"
    />
    <div
      class="hisbox"
      :style="history()"
      @click="this.$store.commit('turnTopBar', 'read')"
    >
      以下是历史记录
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 搜索的内容
      searchvalue: "",
    };
  },
  props: {
    // 控制缩减长度
    overlength: {
      type: Object,
      default: { value: "width: 30vw; left: 15vw" },
    },
  },
  methods: {
    // saidBar状态的动作
    act() {
      if (this.$store.state.topBar.status == "saidBar") {
        return this.overlength.value;
      } else {
        return "";
      }
    },
    // 点击事件后更改用户核心状态
    input() {
      this.$store.commit("turnTopBar", "search");
    },
    // 历史记录的展示
    history() {
      if (this.$store.state.topBar.status == "search") {
        return "height: 100vh;";
      } else {
        return "";
      }
    },
    // 执行搜索
    search() {
      this.hisboxcss = "";
      let params = { corrent: 999, skip: 0, type: this.searchvalue };
      this.$store.dispatch("refreshdata", {
        http: this.axios.post(
          "http://" + this.$store.state.defaulthttp + "/read",
          params
        ),
        params,
      });
    },
  },
};
</script>

<style lang="less" scoped>
div .box {
  position: relative;
  height: 100%;
  left: 30vw;
  display: flex;
  width: 60vw;
  align-items: center;
  transition: all 1s;
  input {
    background-color: white;
    width: 100%;
    border-radius: 10vw;
    height: 60%;
    padding-left: 10px;
    border: 0px;
    z-index: 1;
    transition: all 1s;
  }
  input:focus {
    outline: none;
    background-color: black;
    color: white;
  }
  .hisbox {
    transition: all 1s;
    height: 0;
    background-color: white;
    position: absolute;
    top: 0;
    width: 100vw;
    left: -20vw;
    overflow: hidden;
    z-index: 0;
  }
}
</style>
