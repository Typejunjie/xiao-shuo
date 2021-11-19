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
  created() {
    let params = {};
    this.axios.post("http://localhost:8080/read", params).then((res) => {
      console.log(res);
    });
  },
};
</script>

<style>
@import url("./commonCss/reaset.css");
</style>
