<template>
  <div :style="'height:' + height + ';'" class="read-router">
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
  data() {
    return {
    };
  },
  created() {
  },
  computed: {
    readdata() {
    }
  }
};
</script>

<style lang="less" scoped>
div .read-router{
    border-bottom: solid black 1px;
    border-radius: 20px;
    overflow: scroll;
}
</style>