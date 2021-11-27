/* 
遗留问题
对于信息修改读取状态的通知栏未设置
滑动问题还未解决
类型修改查询功能未设置

各个组件的打开关闭状态应该移步到vuex中处理
 */

<template><!-- @touchmove.prevent -->
  <div id="root">
    <great-tapbar />
    <router-view :height="'84vh'" @touchmove.stop=''></router-view>
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
    });
  },
  // 将vh改造为浏览器适配
  mounted() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  },
};
</script>

<style lang="less" scoped>
@import url("./commonCss/reaset.css");

#root{
  overflow-y: none;
}

</style>
