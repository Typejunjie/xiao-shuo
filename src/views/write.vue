/* 
遗留问题
样式未完全设定
内容只有text
没有动画

 */


<template>
  <div :style="'height:' + height + ';'">
    <div id="timeTag">{{ day() }}</div>
    <textarea name="text" id="" cols="30" rows="10" v-model="content"></textarea>
    <div id="sendbutton" @touchend='send'>确认</div>
    <div id="usertap">
        <div>user</div>
        <div>contenttype</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前时间
      timenew: Array,
      // 当前内容
      content: '',
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
    send() {
      let data = {
        writeday: this.timenew,
        type: '测试',
        content: this.content,
      }
      this.axios.post('http://localhost:8080/write',data).then(res=>{
        console.log(res);
      })
    }
  },
};
</script>

<style lang="less" scoped>
div {
  background-color: #bfa;
  div #timeTag {
    font-size: 40px;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: blanchedalmond;
    height: 10vh;
  }
  textarea {
    height: 64vh;
    width: 99vw;
    border: 0px;
    font-size: 30px;
  }
  textarea:focus {
    outline: none;
  }
  div #usertap{
      display: flex;
      div{
          height: 5vh;
          width: 50%;
          &:nth-child(1){
              background-color: teal;
          }
      }
  }
  div #sendbutton{
    height: 5vh;
    background-color: tomato;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
  }
}
</style>