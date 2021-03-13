<template>
    <div class="left">
        <title-header title="热门推荐">
            <template v-slot:icon>
                <div class="icon">
                    <i class="el-icon-lollipop" :style="{fontSize: '20px',color: 'red'}" />
                </div>
            </template>
            <template v-slot:more>
                <span>更多</span>
            </template>
        </title-header>
        <div class="recommend-list">
            <card1 :handlePlay="handlePlay" v-for="item in recommendList" :data="item" :key="item.id"  />
        </div>
        <title-header title="新碟上架">
            <template v-slot:icon>
                <div class="icon">
                    <i class="el-icon-coffee" :style="{fontSize: '20px',color: 'red'}" />
                </div>
            </template>
            <template v-slot:more>
                <span>更多</span>
            </template>
        </title-header>
        <div class="album-list">
            <div class="left-icon" @click="handlePrev">
                <i class="el-icon-arrow-left"></i>
            </div>
            <el-carousel ref="carousel" height="140px" :autoplay="false" class="album-item" arrow="never" indicator-position="none">
                <el-carousel-item v-for="albumItem in albumList">
                    <card2 v-for="item in albumItem" :data="item" :key="item.id"  />
                </el-carousel-item>
            </el-carousel>
            <div class="right-icon" @click="handleNext">
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        name: "LeftPart",
        props: ["recommendList", "albumList"],
        data(){
            return {
                active: 0
            }
        },
        methods:{
            ...mapActions({
                fetchPlayList: "player/fetchPlayList"
            }),
            handlePrev(){
                this.$refs.carousel.prev();
            },
            handleNext(){
                this.$refs.carousel.next();
            },
            handlePlay(id){
                this.fetchPlayList(id);
            }
        }
    }
</script>

<style scoped lang="scss">
    .recommend-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 20px;
    }
    .album-list{
        height: 186px;
        margin: 20px 0 37px;
        border: 1px solid #d3d3d3;
        background: #f5f5f5;
        /*display: flex;*/
        /*flex-direction: column;*/
        /*flex-wrap: wrap;*/
        /*overflow: hidden;*/
        position: relative;
        .album-item{
            padding: 0 27px;
            width: 634px;
            margin-top: 29px;
            ::v-deep .el-carousel__item{
                display: flex;
                justify-content: space-around;
            }
        }
    }
    .left-icon, .right-icon{
        position: absolute;
        top: 70px;
        z-index: 2;
    }
    .right-icon{
        right: 0;
    }
    .icon{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 100%;
    }
</style>
