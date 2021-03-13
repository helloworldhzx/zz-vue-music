<template>
    <div class="carousel-wrapper" :style="{background: `url(${background}?imageView&blur=40x20)`}">
        <div class="carousel">
            <el-carousel ref="carousel" trigger="click" :interval="5000" :autoplay="autoplay" arrow="always" @change="handleChange">
                <el-carousel-item v-for="item in banners" :key="item.imageUrl">
                    <img :src="item.imageUrl" />
                </el-carousel-item>
            </el-carousel>
            <div class="ad">广告位出租</div>
        </div>
    </div>
</template>

<script>
    import { getBannerRequest } from "@/api";
    import { debounce } from "lodash";
    export default {
        name: "carousel",
        data(){
            return {
                banners: [],
                background: "",
                autoplay: false
            }
        },
        created(){
            getBannerRequest().then(res => {
                this.banners = res.banners;
                this.background = res.banners[0].imageUrl
            })
        },
        mounted(){
            this.$nextTick(() => {
                this.scroll()
                window.addEventListener('scroll', this.scroll)
            })
        },
        destroyed () {
            window.removeEventListener('scroll', this.scroll, false)
        },
        methods: {
            handleChange(index){
                this.background = this.banners[index].imageUrl
            },
            scroll: debounce(function(){
                const domInfo = this.$refs.carousel.$el.getBoundingClientRect();
                if(domInfo.top < -300){
                    this.autoplay = false
                } else {
                    this.autoplay = true
                }
            },1000)
        }
    }
</script>

<style scoped lang="scss">
    .carousel-wrapper {
        .carousel{
            position: relative;
            width: $base-content-width;
            margin: 0 auto;
            background: #d3d3d3;
            img{
                width: 730px;
                height: 100%;
            }
            .ad{
                position: absolute;
                top: 0;
                z-index: 20;
                right: -1px;
                height: 100%;
                line-height: 280px;
                background: #42b983;
                font-size: 50px;
            }
        }
    }
    .el-carousel{
        width: 730px;
    }
    ::v-deep{
        .el-carousel__button{
            width: 5px;
            height: 5px;
            border-radius: 5px;
        }
    }
</style>
