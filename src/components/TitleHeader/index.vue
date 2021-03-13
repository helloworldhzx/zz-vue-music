<template>
    <div class="title-header">
        <div>
            <slot name="icon"></slot>
            <span class="title">{{title}}</span>
            <slot></slot>
        </div>
        <div>
            <slot name="more"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TitleHeader",
        props: ["title"]
    }
</script>

<style scoped lang="scss">
    .title-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid #C10D0C;
        height: 33px;
        padding-right: 10px;
        .title{
            font-size: 20px;
            font-weight: normal;
        }
    }
</style>
