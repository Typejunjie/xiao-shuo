<template>
  <div class="userview" @touchend="this.$store.commit('turnTopBar', 'user')">
    用户
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.userview {
  padding: 6vh 0;
  height: 100%;
}
</style>
