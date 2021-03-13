<template>
    <div :class="'card2-'+size">
        <div class="play-card">
            <img :src="data.picUrl"/>
            <a class="bak"></a>
            <a class="play">
                <i class="el-icon-video-play"></i>
            </a>
        </div>
        <p class="name"><a>{{data.name}}</a></p>
        <p class="name2"><a>{{data.artist.name}}</a></p>
    </div>
</template>

<script>
    export default {
        name: "card2",
        props: {
            data: Object,
            size: {
                type: String,
                default: "small"
            }
        }
    }
</script>

<style scoped lang="scss">
    .card2-small{
        display: inline-block;
        /*margin-bottom: 30px;*/
        width: 118px;
        height: 150px;
        .play-card{
            width: 100px;
            height: 100px;
            position: relative;
            cursor: pointer;
            img{
                width: 100%;
            }
            .bak{
                position: absolute;
                top: 0;
                left: 0;
                width: 118px;
                height: 100px;
                background: url("../../image/coverall.png") no-repeat 0 -570px;
            }
            .play{
                position: absolute;
                right: 10px;
                bottom: 5px;
                display: none;
            }
        }
        .play-card:hover{
            .play{
                display: block;
            }
        }
        @mixin nameStyle {
            width: 90%;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .name{
            @include nameStyle;
            margin: 8px 0 3px;
        }
        .name2{
            @include nameStyle;
        }
    }
</style>
