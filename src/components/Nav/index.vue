<template>
    <div>
        <div v-if="active === 'discover'" class="nav-discover">
            <div class="sub-wrapper">
                <ul class="sub">
                    <li v-for="item in navList" @click="handleLink(item)">
                        <a :class="{active: navActive === item.key}">{{item.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="active !== 'discover'" class="nav-other" />
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data(){
            return {
                navList: [{
                    name: "推荐",
                    path: "/discover",
                    key: "discover"
                },{
                    name: "排行榜",
                    path: "/discover/topList",
                    key: "topList"
                },{
                    name: "歌单",
                    path: "/discover/playList",
                    key: "playList"
                },{
                    name: "主播电台",
                    path: "/discover/djradio",
                    key: "djradio"
                },{
                    name: "歌手",
                    path: "/discover/artist",
                    key: "artist"
                },{
                    name: "新碟上架",
                    path: "/discover/album",
                    key: "album"
                }],
            }
        },
        computed: {
            navActive(){
                console.log(this.$route)
                return this.$route.name;
            },
            active(){
                return this.$route.meta.active;
            }
        },
        methods: {
            handleLink(item){
                if(this.$route.path === item.path) return;
                this.$router.push(item.path);
            }
        }
    }
</script>

<style scoped lang="scss">
    .nav-discover{
        height: 35px;
        background: #C20C0C;
        border-bottom: 1px solid #a40011;
        .sub-wrapper{
            width: $base-top-width;
            margin: 0 auto;
            .sub{
                margin-left: 180px;
                li{
                    float: left;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    a{
                        color: #fff;
                        font-size: 12px;
                        border-radius: 20px;
                        display: inline-block;
                        height: 20px;
                        line-height: 19px;
                        padding: 0 13px;
                        margin: 0 20px;
                    }
                    .active, a:hover{
                        background: #9B0909;
                    }
                }
            }
        }
    }
    .nav-other{
        height: 5px;
        background: #C20C0C;
    }
</style>
