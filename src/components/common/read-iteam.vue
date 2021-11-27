/* 
遗留问题


 */


<template>
  <div class="iteambox" @touchend="actIteam" :style="iteamStyle">
    <div class="dataheard">
      <i>{{ writeday }}</i>
      <i>类型: {{ data.type }}</i>
    </div>
    <div class="content" v-show="!actWhether">{{ data.content }}</div>
    <div v-show="actWhether" class="actbox">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="data.content"
      ></textarea>
      <div @touchstart.stop="pushcontent">确认</div>
    </div>
    <div class="delete" @touchstart.stop="_delete"><i class="fa fa-trash-o"></i></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 控制修改模式是否开启
      actWhether: false,
      // 用于盒子内联样式修改
      iteamStyle: "",
    };
  },
  props: {
    // 传入数据的接收
    data: {
      type: Object,
      default: {
        writeday: "未获取日期",
        type: "未知",
        content: "无法获取内容",
      },
    },
    // 数据id
    _id: "",
    // 数据在前端的下标
    num: Number,
  },
  computed: {
    // 将时间可视化
    writeday() {
      let turn = this.data.writeday;
      if (!turn[0]) {
        turn = "无法获取日期";
        return turn;
      }
      return turn[0] + "-" + turn[1] + "-" + turn[2];
    },
  },
  methods: {
    // 修改routerIteam状态
    actIteam() {
      this.actWhether = true;
      this.iteamStyle = "height: 40vh;";
    },
    // push结果到服务器
    pushcontent() {
      this.iteamStyle = "";
      this.actWhether = false;
      let params = { _id: this._id, content: this.data.content};
      this.$store.dispatch("reviseData", {
        http: this.axios.post(
          "http://" + this.$store.state.defaulthttp + "/revise",
          params
        ),
      });
    },
    // 删除选中数据
    _delete() {
      if(this.$store.state._deletewait){
        console.log('请等待上一条删除完成');
        return
      }
      let params = { _id: this._id };
      let num = this.num;
      this.$store.dispatch("deleteData", {
        http: this.axios.post(
          "http://" + this.$store.state.defaulthttp + "/delete",
          params
        ),
        num,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.iteambox {
  transition: all 1s;
  overflow: hidden;
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
  .content {
    box-sizing: border-box;
    padding: 5%;
    height: 25vh;
  }
  .actbox {
    textarea {
      border: none;
      width: 98%;
      height: 25vh;
      margin: 10px auto;
      font-size: 24px;
      &:focus {
        outline: none;
      }
    }
    div {
      height: 4vh;
      width: 16vw;
      background-color: rgb(141, 165, 218);
      margin: 2px 5px 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
    }
  }
  .delete {
    transition: all 1s;
    position: sticky;
    bottom: 0;
    height: 5vh;
    width: 10vw;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
</style>
