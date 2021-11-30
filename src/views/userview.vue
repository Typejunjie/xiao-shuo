<template>
  <div class="userview" @touchend="this.$store.commit('turnTopBar', 'user')">
    <div @click="registered">测试是否能注册</div>
  </div>
</template>

<script>
export default {
  methods: {
    registered() {
      let data = {
        username: 'Mangerdawdawd',
        password: 'youjunjie142211'
      }
      this.axios.post(
        "http://" + this.$store.state.defaulthttp + "/registered",
        data
      ).then(res => {
        console.log(res.data);
      })
    },
  },
};
</script>

<style lang="less" scoped>
.userview {
  padding: 6vh 0;
  height: 100%;
}
</style>
