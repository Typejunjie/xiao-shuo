/* 
待解决问题
搜索栏还未设置，需要同其他组件同时移动
个人中心按键未设置，位置于最有处

 */

<template>
  <div id="greatTapbar">
    <trhsmollcom @changesaidstats="changesaidstats"></trhsmollcom>
    <saidbbar :saidbarstats="saidbarstats"></saidbbar>
  </div>
</template>

<script>
import Saidbbar from "./saidbbar.vue";
import trhsmollcom from "./trhsmollcom.vue";

export default {
  components: { trhsmollcom, Saidbbar },
  data() {
    return {
      // 用于传入saidbar控制展开
      saidbarstats: false,
    };
  },
  methods: {
    // 顶部状态条是否打开检测函数
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
}
</style>
