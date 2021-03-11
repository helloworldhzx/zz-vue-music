<template>
    <span class="avatar-dropdown">
        <img class="user-avatar" :src="avatar" alt="">
    </span>
</template>

<script>
    export default {
        name: "Avatar",
        data(){
            return {
                avatar: "https://i.gtimg.cn/club/item/face/img/2/15922_100.gif"
            }
        }
    }
</script>

<style scoped lang="scss">
    .avatar-dropdown{
        float: right;
        height: 45px;
        margin: 19px 0 0 20px;
        padding: 0 22px 0 0;
        background-position: right -47px;
        background-image: none;
        .user-avatar{
            width: 30px;
            height: 30px;
            border-radius: 30px;
        }
    }
</style>
