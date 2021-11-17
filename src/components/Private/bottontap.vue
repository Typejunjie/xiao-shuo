<template>
    <div id="bottontap">
        <div :class="fontread" @touchstart='this.$router.replace("/read")'></div>
        <div :class="fontwrite" @touchstart='this.$router.replace("/write")'></div>
    </div>
</template>

<script>
export default {
    props: {
        fontwrite: {
            type: String,
            default: 'fas fa-pencil-square'
        },
        fontread: {
            type: String,
            default: 'fas fa-columns'
        }
    }
}
</script>

<style lang="less" scoped>
#bottontap{
    position: fixed;
    bottom: 0;
    height: 10vh;
    width: 100vw;
    display: flex;
    div{
        height: 100%;
        width: 50vw;
        &:nth-child(1){
            background-color: tomato;
        }
        &:nth-child(2){
            background-color: teal;
            color: thistle;
        }
    }
}
</style>
