/* 
待解决问题

 */

<template>
  <div id="greatTapbar">
    <!-- 侧边栏 -->
    <trhsmollcom @changesaidstats="changesaidstats"></trhsmollcom>
    <!-- 侧边栏按钮 -->
    <saidbbar :saidbarstats="saidbarstats"></saidbbar>
    <!-- 搜索栏 -->
    <search :stats="saidbarstats" :overlength="{value: 'width: 30vw; left: 15vw'}"></search>
    <!-- 用户界面按钮 -->
    <useragent :fontawesome="overawesome"></useragent>
  </div>
</template>

<script>
import Search from '../common/search.vue';
import Useragent from '../common/useragent.vue';
import Saidbbar from "./saidbbar.vue";
import trhsmollcom from "./trhsmollcom.vue";

export default {
  components: { trhsmollcom, Saidbbar, Search, Useragent },
  data() {
    return {
      // 用于传入saidbar控制展开、search缩放
      saidbarstats: false,
      // 用于控制user按钮图标
      overawesome: 'fa fa-user'
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
