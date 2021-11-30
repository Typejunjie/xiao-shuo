/* 
遗留问题
对于信息修改读取状态的通知栏未设置
类型修改功能未设置
头标签没有管理

 */

<template>
  <!-- @touchmove.prevent -->
  <div id="root">
    <!-- 顶部导航栏 -->
    <great-tapbar />
    <!-- 路由内容 -->
    <router-view :height="'84vh'" @touchmove.stop=""></router-view>
    <!-- 底部入路由选择栏 -->
    <bottontap></bottontap>
    <!-- 模态框 -->
    <modal></modal>
    <!-- 状态弹窗 -->
    <state-modal></state-modal>
  </div>
</template>

<script>
import Bottontap from "./components/Private/bottontap.vue";
import greatTapbar from "./components/Private/greatTapbar.vue";
import refresh from "@/api/refresh"
import Modal from './components/Private/modal.vue';
import StateModal from './components/Private/stateModal.vue';

export default {
  components: { greatTapbar, Bottontap, Modal, StateModal },

  // read页面首次创建刷新数据
  created() {
    refresh(this);
  },
  // 将vh改造为浏览器适配
  mounted() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // We listen to the resize event
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  },
};
</script>

<style lang="less" scoped>
@import url("./commonCss/reaset.css");

#root {
  overflow-y: none;
}
</style>
