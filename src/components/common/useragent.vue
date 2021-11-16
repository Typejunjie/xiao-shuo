/* 
遗留问题

 */


<template>
    <div :class="fontawesome"></div>
</template>

<script>
export default {
    props: {
        fontawesome: {
            type: String,
            default: 'fas fa-user'
        }
    }
}
</script>

<style lang="less" scoped>
div{
    position: absolute;
    right: 0;
    color: white;
    width: 20vw;
    display: flex;
    align-items: center;
    line-height: 48px;
    justify-content: space-around;
    font-size: 24px;
}
</style>