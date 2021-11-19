<template>
  <div :style="'height:' + height + ';'" class="read-router">
    <read-iteam
      v-for="(value, key) in datawripper"
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
      datawripper: [
        {
          writeday: "2021-11-19",
          type: "测试",
          content: "在此测试",
        },
        { writeday: "2021-11-20", type: "测试", content: "在此测试2" },
      ],
    };
  },
  created() {},
};
</script>

<style lang="less" scoped>
div .read-router{
    border-bottom: solid black 1px;
    border-radius: 20px;
    overflow: scroll;
}
</style>