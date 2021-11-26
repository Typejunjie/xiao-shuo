<template>
  <div
    class="userview"
    @touchend="this.$store.commit('turnTopBar', 'user')"
  >
    用户界面
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
.userview{
  padding: 10vh 0;
  height: 100%;
}
</style>