/* 
遗留问题：
touchstart和touchend的连环事件触发没有解决，
touchend在元素外依旧会触发

 */


<template>
  <div id="trhsmollcom" @touchstart="touchstartact" @touchend="revolve">
    <div v-for="(value, key) in wrippbox" :style="value" :key="key"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wrippbox: ["", "", ""],
      start: Number,
    };
  },
  methods: {
    revolve() {
      if (this.wrippbox[0] == "" && this.start == 1) {
        this.wrippbox[0] = "top: 26px; transform: rotateZ(45deg);";
        this.wrippbox[1] = "opacity: 0;";
        this.wrippbox[2] = "top: 24px; transform: rotateZ(-45deg);";
      } else {
        this.wrippbox = ["", "", ""];
      }
      this.start = 0;
    },
    touchstartact() {
      this.start = 1;
    },
  },
};
</script>

<style lang="less" scroped>
div #trhsmollcom {
  position: absolute;
  height: 48px;
  width: 50px;
  // 定义三个元素的初始状态
  div {
    background-color: white;
    height: 1px;
    width: 30px;
    position: relative;
    transition: all 1s;
    &:nth-child(1) {
      top: 14px;
      left: 20px;
    }
    &:nth-child(2) {
      top: 24px;
      left: 20px;
    }
    &:nth-child(3) {
      top: 34px;
      left: 20px;
    }
  }
  //
}
// 定义旋转动画
@keyframes revolve {
  from {
  }
  to {
  }
}
</style>

