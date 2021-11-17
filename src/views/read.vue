<template>
    <div :style="'height:'+height+';'">read</div>
</template>

<script>
export default {
    props: {
        height: {
            type: String,
            default: '500px'
        }
    }
}
</script>

<style lang="less" scoped>
div{
    background-color: #bfa;
}
</style>