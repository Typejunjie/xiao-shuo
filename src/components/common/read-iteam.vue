/* 
遗留问题
点击后应变高且文本可以更改，且添加确认按钮用于修改内容

 */


<template>
  <div class="iteambox">
    <div class="dataheard">
      <i>{{ writeday }}</i>
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
  computed: {
    writeday() {
      let turn = this.data.writeday;
      if (!turn[0]) {
        turn = "~~~";
        return turn
      }
      return turn[0] + "-" + turn[1] + "-" + turn[2];
    },
  },
};
</script>

<style lang="less" scoped>
.iteambox {
  height: 20vh;
  width: 85vw;
  box-sizing: border-box;
  padding: 5%;
  box-shadow: 0 0 4px rgb(161, 161, 161);
  border-radius: 14px;
  margin: 3vw 0;
  .dataheard {
    display: flex;
    justify-content: space-around;
    height: 3vh;
    width: 100%;
    align-items: center;
    font-size: 18px;
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
  .content{
    box-sizing: border-box;
    padding: 5%;
  }
}
</style>
