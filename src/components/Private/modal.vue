<template>
  <!-- 最外层用于覆盖app所有内容阻止用户操作 -->
  <div class="modalbox" :style="takeup()">
    <div class="modal-wripper">
      <div class="content">{{ this.$store.state.modalcontent }}</div>
      <div class="options">
        <i @click="enterTrue">确定</i><i @click="enterFalse">取消</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 拉取store的状态保证模态框的开启、关闭
    takeup() {
      if (this.$store.state.modal) {
        return "";
      } else {
        return "display: none;";
      }
    },
    // 开启模态框后等待用户选择确认或取消，并执行对应resolve、reject方法
    enterTrue() {
      this.$store.commit("turnModal", { status: false, content: "" });
      this.$store.state.modalPromis.resolve()
    },
    enterFalse() {
      this.$store.commit("turnModal", { status: false, content: "" });
      this.$store.state.modalPromis.reject()
    }
  },
};
</script>

<style lang="less" scoped>
.modalbox {
  height: 100vh;
  width: 100vw;
  background-color: rgba(190, 190, 190, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .modal-wripper {
    height: 25vh;
    width: 80vw;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    .options {
      display: flex;
      justify-content: space-around;
      width: 100%;
      i {
        padding: 4vw 6vw;
        background-color: aquamarine;
        border-radius: 20px;
      }
    }
  }
}
</style>
