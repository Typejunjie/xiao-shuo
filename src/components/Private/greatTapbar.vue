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

<style>
#greatTapbar {
  height: 48px;
  background-color: black;
  display: flex;
}
</style>
