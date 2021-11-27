/* 
遗留问题
滑动冒泡没有解决
浏览器默认栏导致高度不一致内容无法完全显示

 */

<template>
  <div
    class="read-router"
    @touchend="this.$store.commit('turnTopBar', 'read')"
  >
    <read-iteam
      v-for="(value, index) in $store.state.readdata"
      :key="value._id"
      :data="value"
      :_id="value._id"
      :num="index"
    ></read-iteam>
  </div>
</template>

<script>
import readIteam from "../components/common/read-iteam.vue";

export default {
  components: { readIteam },
};
</script>

<style lang="less" scoped>
div .read-router {
  height: 100%;
  display: flex;
  overflow: hidden;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  padding: 7vh 0 11vh;
}
</style>