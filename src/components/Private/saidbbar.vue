/* 
遗留问题
使用内联样式触发transition，增加了组件的耦合度
没有对获取数据的展示，目前依旧是空壳状态
内容部分等待api建设后获取

 */

<template>
  <div id="saidbar" :style="stats">
    <div></div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            // 予以内联样式修改位置，触发transition
            stats: '',
        }
    },
    props: {
        // 获取父组件传入的状态控制值
        saidbarstats: Boolean
    },
    watch: {
        // 监视状态控制值的改变
        saidbarstats(o, n) {
            if(this.stats == ''){
                this.stats = 'margin-left: 0vw;';
            }else{
                this.stats = '';
            }
           
        }
    },
};
</script>

<style lang="less" scoped>
div {
  width: 40%;
  background-color: white;
  height: 100vh;
  position: relative;
  z-index: 999;
  transition: all 1s;
  margin-left: -50vw;
  box-shadow: rgb(150, 150, 150) 1px 0 10px;
}
</style>
