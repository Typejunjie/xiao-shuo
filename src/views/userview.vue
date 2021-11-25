<template>
  <div
    :style="'height:' + height + ';'"
    @touchend="this.$store.commit('turnTopBar', 'user')"
  >
    用户界面
  </div>
</template>

<script>
export default {
  props: {
    // 高度控制
    height: {
      type: String,
      default: "500px",
    },
  },
};
</script>

<style lang="less" scoped>
</style>