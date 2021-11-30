<template>
  <div class="stateModal-wripper" :style="actStyle()">
    <div :class='$store.state.stateModal.font'></div>
    <div>{{$store.state.stateModal.content}}</div>
  </div>
</template>

<script>
export default {
  methods: {
    actStyle() {
      if (this.$store.state.stateModal.state == true) {
        return "right: 0;";
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.stateModal-wripper {
  position: fixed;
  width: 100vw;
  height: 5vh;
  right: -100vw;
  top: 6vh;
  background-color: aquamarine;
  transition: all .5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
</style>

