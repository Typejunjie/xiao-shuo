/* 
待解决问题
搜索栏还未设置，需要同其他组件同时移动
个人中心按键未设置，位置于最有处

 */

<template>
  <div id="greatTapbar">
    <!-- 侧边栏 -->
    <trhsmollcom @changesaidstats="changesaidstats"></trhsmollcom>
    <!-- 侧边栏按钮 -->
    <saidbbar :saidbarstats="saidbarstats"></saidbbar>
    <!-- 搜索栏 -->
    <search :stats="saidbarstats" :overlength="{value: 'width: 30vw; left: 15vw'}"></search>
  </div>
</template>

<script>
import Search from '../common/search.vue';
import Saidbbar from "./saidbbar.vue";
import trhsmollcom from "./trhsmollcom.vue";

export default {
  components: { trhsmollcom, Saidbbar, Search },
  data() {
    return {
      // 用于传入saidbar控制展开、search缩放
      saidbarstats: false,
    };
  },
  methods: {
    // 更新topbar各组件状态
    changesaidstats() {
      this.saidbarstats = !this.saidbarstats;
    },
  },
};
</script>

<style>
#greatTapbar {
  height: 48px;
  background-color: black;
  display: flex;
}
</style>
