<template>
  <div class="iteambox">
    <div class="dataheard">
      <i>{{ data.writeday }}</i>
      <i>类型: {{ data.type }}</i>
    </div>
    <div class="content">{{ data.content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="less" scoped>
.iteambox {
  height: 30vh;
  width: 100vw;
  background-color: turquoise;
  box-sizing: border-box;
  border-bottom: solid black 1px;
  margin-bottom: 10px;
  .dataheard {
    display: flex;
    justify-content: space-around;
    height: 7vh;
    width: 100%;
    align-items: center;
    font-size: 22px;
    i {
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-around;
      &:nth-child(1) {
        text-align: center;
        box-sizing: border-box;
        border-right: black 1px solid;
      }
      &:nth-child(2) {
        box-sizing: border-box;
        text-align: center;
      }
    }
  }
}
</style>
