/* 
遗留问题
使用内联样式触发transition，增加了组件的耦合度
没有对获取数据的展示，目前依旧是空壳状态
内容部分等待api建设后获取

 */

<template>
  <div id="saidbar" :style="status()">
    <div></div>
  </div>
</template>

<script>
export default {
  methods: {
    // 由store控制是否打开
    status() {
      if (this.$store.state.topBar.status == "saidBar") {
        return "margin-left: 0vw;";
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="less" scoped>
div {
  width: 40%;
  background-color: white;
  height: 100vh;
  position: relative;
  z-index: 999;
  transition: all 1s;
  margin-left: -50vw;
  box-shadow: rgb(150, 150, 150) 1px 0 10px;
}
</style>
