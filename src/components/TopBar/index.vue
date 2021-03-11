<template>
    <div class="top-bar-container">
        <div class="content">
            <span class="logo"><a hidefocus="true" href="#/discover">网抑云音乐</a></span>
            <TabList :active="active" :tabList="tabList" />
        </div>
    </div>
</template>

<script>
    import TabList from "./components/TabList"
    export default {
        name: "TopBar",
        components: {
            TabList
        },
        data(){
            return {
                tabList: [{
                    name: "发现音乐",
                    path: "discover"
                },{
                    name: "我的音乐",
                    path: "myMusic"
                },{
                    name: "朋友",
                    path: "friend"
                },{
                    name: "音乐人",
                    path: "??"
                }]
            }
        },
        computed: {
            active(){
                console.log(this.$route.meta.active)
                return this.$route.meta.active;
            }
        }
    }
</script>

<style scoped lang="scss">
    .top-bar-container{
        position: relative;
        z-index: 1000;
        height: 70px;
        box-sizing: border-box;
        background: #242424;
        border-bottom: 1px solid #000;
        .content{
            width: $base-content-width;
            margin: 0 auto;
            .logo{
                margin: 0;
                float: left;
                width: 176px;
                height: 69px;
                background: url(../../image/topbar.png) no-repeat 0 0;
                a{
                    float: left;
                    width: 176px;
                    height: 100%;
                    text-indent: -9999px;
                }
            }
        }
    }
</style>
