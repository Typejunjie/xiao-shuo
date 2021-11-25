/* 
遗留问题：
touchstart和touchend的连环事件触发没有解决，
touchend在元素外依旧会触发

依旧需要使用内联样式触发transition，通过切割class无法触发
 */


<template>
  <div id="trhsmollcom" @touchend="revolve" :style="act(3)">
    <div v-for="(value, key) in wrippbox" :style="act(key)" :key="key"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wrippbox: ["", "", ""],
      localnow: '',
    };
  },
  methods: {
    // 更改状态
    revolve() {
      if(this.$store.state.topBar.status != 'saidBar'){
        this.$store.commit('turnTopBar', 'saidBar')
      }else{
        this.$store.commit('turnTopBar', this.$store.state.routerstatus.nowrouter)
      }
      
    },
    // 监控状态并作出动作
    act(key) {
      if(this.$store.state.topBar.status == 'saidBar'){
        switch(key){
          case 0:return "top: 26px; transform: rotateZ(45deg);";
          case 1:return "opacity: 0;";
          case 2:return "top: 24px; transform: rotateZ(-45deg);";
          case 3:return 'margin-left: 40vw';
        }
      }else{
        return ''
      }
    }
  },
};
</script>

<style lang="less" scroped>
div #trhsmollcom {
  position: absolute;
  height: 48px;
  width: 50px;
  transition: all 1s;
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
}
</style>

