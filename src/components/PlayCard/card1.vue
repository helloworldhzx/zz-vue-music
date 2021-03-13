<template>
    <div class="card1">
        <div class="play-card">
            <img :src="data.picUrl"/>
            <div class="bottom">
                <span class="headset"><i class="el-icon-headset" /></span>
                <span class="number">12344</span>
                <span class="video" @click="handlePlay(data.id)"><i class="el-icon-video-play" /></span>
            </div>
        </div>
        <div class="text">{{data.name}}</div>
    </div>
</template>

<script>
    export default {
        name: "card1",
        props: ["data", "handlePlay"]
    }
</script>

<style scoped lang="scss">
    .card1{
        display: inline-block;
        margin-bottom: 30px;
        .play-card{
            width: 140px;
            height: 140px;
            position: relative;
            img{
                width: 100%;
            }
            .bottom{
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 27px;
                display: flex;
                align-items: center;
                font-size: 12px;
                color: #ccc;
                background: url("../../image/coverall.png") no-repeat 0 -537px;
                @mixin wrapper{
                    display: inline-flex;
                    height: 27px;
                    width: 27px;
                    align-items: center;
                    justify-content: center;
                }
                .headset{
                    @include wrapper;
                    font-size: 16px;
                }
                .number{
                    flex-grow: 1;
                }
                .video{
                    @include wrapper;
                    font-size: 20px;
                }
            }
        }
        .text{
            width: 140px;
            margin: 8px 0 3px;
            font-size: 14px;
        }
    }
</style>
