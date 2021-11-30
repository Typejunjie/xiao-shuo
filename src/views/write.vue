/* 
遗留问题
user 栏等用户数据库设计完在进行样式设定
更多的内容类型待数据库设计


 */


<template>
  <div
    :style="'height:' + height + ';'"
    class="writebox"
    @touchend="this.$store.commit('turnTopBar', 'write')"
  >
    <div class="headbox">
      <div class="timeTag">
        <div>today:</div>
        {{ day() }}
      </div>
      <div class="typebox">类型：{{ typevalue }}</div>
    </div>
    <textarea
      name="text"
      id="content"
      cols="30"
      rows="10"
      v-model="content"
      placeholder="在此处输入"
    ></textarea>
    <div id="sendbutton" @click="send">确认</div>
    <div id="usertap">
      <div>user</div>
      <div>contenttype</div>
    </div>
  </div>
</template>

<script>
import refresh from "@/api/refresh";

export default {
  data() {
    return {
      // 当前时间
      timenew: Array,
      // 当前内容
      content: "",
      // 当前类型
      typevalue: "测试",
    };
  },
  props: {
    // 限定高度
    height: {
      type: String,
      default: "500px",
    },
  },
  methods: {
    // 获取当前时间并处理为所需内容
    day() {
      let arrayday = window.Date().split(" ");
      switch (arrayday[1]) {
        case "Jan":
          arrayday[1] = "1";
          break;
        case "Feb":
          arrayday[1] = "2";
          break;
        case "Mar":
          arrayday[1] = "3";
          break;
        case "Apr":
          arrayday[1] = "4";
          break;
        case "May":
          arrayday[1] = "5";
          break;
        case "Jun":
          arrayday[1] = "6";
          break;
        case "Jul":
          arrayday[1] = "7";
          break;
        case "Aug":
          arrayday[1] = "8";
          break;
        case "Sept":
          arrayday[1] = "9";
          break;
        case "Oct":
          arrayday[1] = "10";
          break;
        case "Nov":
          arrayday[1] = "11";
          break;
        case "Dec":
          arrayday[1] = "12";
          break;
        default:
          arrayday[1] = "未获取";
      }
      this.timenew = [arrayday[3], arrayday[1], arrayday[2]];
      return arrayday[3] + "-" + arrayday[1] + "-" + arrayday[2];
    },
    // 发送写入数据
    send() {
      this.$store.commit("turnStateM", {
        state: true,
        content: "正在写入",
        font: "fa fa-pulse fa-spinner",
      });
      let data = {
        writeday: this.timenew,
        type: "测试",
        content: this.content,
      };
      this.axios
        .post("http://" + this.$store.state.defaulthttp + "/write", data)
        .then(res => {
          if (res.data.status) {
            // 置空输入框
            this.content = "";
            // 刷新read页面
            refresh(this);
            // 转到read页面
            this.$router.replace("/read");
            // 关闭状态框
            let params = {
              state: true,
              content: "写入成功",
              font: "fa fa-check-square-o",
            };
            this.$store.commit('turnStateM', params)
            this.$store.dispatch("aysnturnStateM", false);
          }
        })
        .catch(() => {
          // 失败后传给状态框
          let params = {
              state: true,
              content: "写入失败",
              font: "fa fa-window-close",
            };
            this.$store.commit('turnStateM', params)
            this.$store.dispatch("aysnturnStateM", false);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.writebox {
  padding: 6vh 0;
  height: 100%;
  box-sizing: border-box;
  .headbox {
    display: flex;
    width: 100vw;
    height: 7vh;
    .timeTag {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-content: initial;
      font-size: 20px;
      box-sizing: border-box;
      border-right: 1px solid rgb(145, 144, 144);
      color: cornflowerblue;
      div {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-left: -85px;
        font-size: 15px;
      }
    }
    .typebox {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: deepskyblue;
    }
  }
  textarea {
    width: 100vw;
    height: 50vh;
    border: none;
    box-sizing: border-box;
    padding: 20px;
    font-size: 26px;
    &:focus-visible {
      outline: none;
    }
  }
  #sendbutton {
    background-color: rgb(96, 134, 156);
    height: 5vh;
    width: 24vw;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px 0 auto;
  }
  #usertap {
    display: flex;
    height: 8vh;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-child(1) {
        width: 50%;
        box-sizing: border-box;
        border-right: rgb(170, 170, 170) 1px solid;
      }
      &:nth-child(2) {
        width: 50%;
      }
    }
  }
}
</style>