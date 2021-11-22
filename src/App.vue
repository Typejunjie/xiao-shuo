/* 
遗留问题
对于信息修改读取状态的通知栏未设置
滑动问题还未解决
类型修改查询功能未设置


 */

<template><!-- @touchmove.prevent -->
  <div >
    <great-tapbar />
    <router-view :height="'84vh'"></router-view>
    <bottontap></bottontap>
  </div>
</template>

<script>
import Bottontap from "./components/Private/bottontap.vue";
import greatTapbar from "./components/Private/greatTapbar.vue";

export default {
  components: { greatTapbar, Bottontap },
  // read页面首次创建刷新数据
  created() {
    let params = { corrent: 999, skip: 0, type: "测试" };
    this.$store.dispatch("refreshdata", {
      http: this.axios.post("http://"+this.$store.state.defaulthttp+"/read", params),
      params,
    });
  },
};
</script>

<style>
@import url("./commonCss/reaset.css");
</style>
