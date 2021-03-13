<template>
    <div class="player-wrapper">
        <div class="player">
            <div class="btns">
                <span>上一首</span>
                <span @click="handlePlay">暂停</span>
                <span>下一首</span>
            </div>
            <div class="play">
                <span>头像</span>
                <div>
                    <span>{{currentSong.name}}</span>
                    <span>进度条</span>
                </div>
            </div>
            <div class="">
                歌列表{{playList.length}}
            </div>
        </div>
        <audio
            ref="audioRef"
            @onTimeUpdate="updateTime"
            @onEnded="handleEnd"
            @onError="handleError"
        ></audio>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";
    import { getSongUrl } from "@/utils";
    export default {
        name: "Player",
        data(){
            return {}
        },
        computed: {
            ...mapGetters({
                playList: 'player/playList',
                playing: 'player/playing',
                currentSong: 'player/currentSong',
            })
        },
        methods: {
            ...mapMutations({
                setPlay: 'player/setPlay',
            }),
            updateTime(){},
            handleEnd(){},
            handleError(){},
            handlePlay(){
                console.log(1234)
                if(this.playing){
                    this.$refs.audioRef.pause();
                }else {
                    console.log("play")
                    this.$refs.audioRef.play()
                }
                this.setPlay(!this.playing)
            }
        },
        watch: {
            currentSong(){
                this.$refs.audioRef.src = getSongUrl(this.currentSong.id);
            }
        }
    }
</script>

<style scoped lang="scss">
    .player-wrapper{
        position: fixed;
        bottom: 0;
        height: 50px;
        width: 100%;
        z-index: 10000;
        background: #cccccc;
        .player{
            width: $base-content-width;
            margin: 0 auto;
            display: flex;
            align-items: center;
            height: 100%;
        }
    }
</style>
