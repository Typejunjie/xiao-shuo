/* 
遗留问题
点开之后没有更多展示，传统搜索栏一般有历史记录和联想搜索
使用内联样式触发transition

解决问题
默认输入框的边框
 */

<template>
  <div :style="changestats">
    <input type="text" placeholder="搜索"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changestats: "",
    };
  },
  props: {
    stats: Boolean,
    overlength: Object,
  },
  watch: {
    stats() {
      if (this.stats) {
        this.changestats = this.overlength.value;
      } else {
        this.changestats = "";
      }
    },
  },
};
</script>

<style lang="less" scoped>
div {
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
  }
  input:focus {
    outline: none;
  }
}
</style>
