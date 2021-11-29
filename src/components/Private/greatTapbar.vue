/* 
待解决问题

 */

<template>
  <div id="greatTapbar">
    <!-- 侧边栏 -->
    <trhsmollcom></trhsmollcom>
    <!-- 侧边栏按钮 -->
    <saidbbar></saidbbar>
    <!-- 搜索栏 -->
    <search></search>
    <!-- 用户界面按钮 -->
    <useragent></useragent>
  </div>
</template>

<script>
import Search from '../common/search.vue';
import Useragent from '../common/useragent.vue';
import Saidbbar from "./saidbbar.vue";
import trhsmollcom from "./trhsmollcom.vue";

export default {
  components: { trhsmollcom, Saidbbar, Search, Useragent },
};
</script>

<style lang="less" scoped>
#greatTapbar {
  height: 6vh;
  background-color: black;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99;
}
</style>
