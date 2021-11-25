/* 
遗留问题
滑动冒泡没有解决
浏览器默认栏导致高度不一致内容无法完全显示

 */

<template>
  <div
    :style="'height:' + height + ';'"
    class="read-router"
    @touchend="this.$store.commit('turnTopBar', 'read')"
  >
    <read-iteam
      v-for="(value, key) in $store.state.readdata"
      :key="key"
      :data="value"
    ></read-iteam>
  </div>
</template>

<script>
import readIteam from "../components/common/read-iteam.vue";

export default {
  components: { readIteam },
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
div .read-router {
  border-bottom: solid black 1px;
  overflow: scroll;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>