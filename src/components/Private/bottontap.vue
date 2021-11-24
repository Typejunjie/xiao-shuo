/* 
遗留问题
按键很呆板没有动画和模糊度
颜色调控不理想
图标选取不理想
位置无法由父组件控制

 */

<template>
    <div id="bottontap">
        <div :class="read" 
        @touchstart='readclint'></div>
        <div :class="write" 
        @touchstart='writeclint'></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            //按键状态管理
            read: this.fontread.active,
            write: this.fontwrite.silent,
            turnclint: true,
        }
    },
    props: {
        // 接受父组件控制图标类型
        fontwrite: {
            type: Object,
            default: {
               active: 'fa fa-paper-plane',
               silent: 'fa fa-paper-plane-o'
            }
        },
        fontread: {
            type: Object,
            default: {
                active: 'fa fa-map',
                silent: 'fa fa-map-o'
            }
        }
    },
    methods: {
        // 切换router并更改状态
        readclint() {
            this.$router.replace("/read");
            this.turnclint = true;
        },
        writeclint() {
            this.$router.replace("/write");
            this.turnclint = false
        }
    },
    watch: {
        // 实现两个按钮互斥高亮
        turnclint(ol,ne) {
           if(ne == false && ol == true){
               this.read = this.fontread.active;
               this.write = this.fontwrite.silent;
           }else{
               this.read = this.fontread.silent;
               this.write = this.fontwrite.active;
           }
        }
    }
}
</script>

<style lang="less" scoped>
#bottontap{
    position: fixed;
    background-color: white;
    box-shadow: 0 -5px 20px rgb(160, 160, 160);
    bottom: 0;
    height: 10vh;
    width: 100vw;
    display: flex;
    font-size: 60px;
    border-top: black solid 0px;
    div{
        height: 100%;
        width: 50vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &:nth-child(1){
            color: tomato;
            border-right: solid 1px black;
        }
        &:nth-child(2){
            color: thistle;
        }
    }
}
</style>
