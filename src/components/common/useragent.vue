/* 
遗留问题

 */


<template>
  <div :class="fontawesome" @touchend="turnuser"></div>
</template>

<script>
export default {
  props: {
    // 接受传值图标定义
    fontawesome: {
      type: String,
      default: "fa fa-user",
    },
  },
  methods: {
    // 修改store中的状态并切换router
    turnuser() {
      this.$router.replace("/user");
      this.$store.commit("turnRouter", "user");
    },
  },
};
</script>

<style lang="less" scoped>
div {
  position: absolute;
  right: 0;
  color: white;
  width: 20vw;
  display: flex;
  align-items: center;
  line-height: 48px;
  justify-content: space-around;
  font-size: 24px;
}
</style>