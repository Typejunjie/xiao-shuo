<template>
  <div>
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
    let params = { corrent: 1, skip: 0, type: "测试" };
    this.$store.dispatch("refreshdata", {
      http: this.axios.post("http://localhost:8080/read", params),
      params,
    });
  },
};
</script>

<style>
@import url("./commonCss/reaset.css");
</style>
