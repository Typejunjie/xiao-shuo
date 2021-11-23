/* 
遗留问题
搜索功能完成，历史记录待完成
使用内联样式触发transition
点击后将占用全宽且显示历史记录栏

解决问题
默认输入框的边框
 */

<template>
  <div :style="changestats" class="box">
    <input
      type="text"
      placeholder="搜索"
      @focus="showhis"
      @blur="noshowhis"
      @keydown.enter="search"
      v-model="searchvalue"
    />
    <div class="hisbox" :style="hisboxcss">以下是历史记录</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 更改搜索栏状态
      changestats: "",
      // 更改历史记录栏状态
      hisboxcss: "",
      // 搜索的内容特征
      searchvalue: '',
    };
  },
  props: {
    stats: Boolean,
    overlength: Object,
  },
  watch: {
    // 控制搜索栏的长度
    stats() {
      if (this.stats) {
        this.changestats = this.overlength.value;
      } else {
        this.changestats = "";
      }
    },
  },
  methods: {
    // 智能搜索的展示
    showhis() {
      this.hisboxcss = "height: 100vh;";
    },
    noshowhis() {
      this.hisboxcss = "";
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
