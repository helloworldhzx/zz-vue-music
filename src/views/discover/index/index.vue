<template>
    <div class="discover">
        <carousel />
        <div class="container">
            <left-part :recommendList="recommendList" :albumList="albumList" />
            <right-part />
        </div>
    </div>
</template>

<script>
    import { chunk } from "lodash";
    import carousel from "./carousel";
    import LeftPart from "./LeftPart";
    import RightPart from "./RightPart";
    import { getRecommendListRequest, getAlbumNewest } from "@/api";
    export default {
        name: "Discover",
        components: {
            carousel,
            LeftPart,
            RightPart
        },
        data(){
            return {
                recommendList: [],
                albumList: []
            }
        },
        created(){
            this.fetchData();
        },
        methods:{
            async fetchData(){
                const recommend = await getRecommendListRequest();
                const album = await getAlbumNewest();
                this.recommendList = recommend.result;
                const flgArr = album.albums;
                // flgArr.pop();
                // flgArr.pop();
                // const arr = [];
                // const resetArr = flgArr.splice(0,5)
                // arr.push(resetArr);
                // arr.push(flgArr);
                // arr.push(resetArr);
                // arr.push(flgArr);
                this.albumList = chunk(flgArr, 5);
            }
        }
    }
</script>

<style scoped lang="scss">
    .discover{
        .container{
            width: $base-content-width;
            margin: 0 auto;
            border: 1px solid $base-border-color;
            height: 900px;
            display: flex;
            .left{
                width: 690px;
                height: 100%;
                padding: 20px;
            }
            .right{
                height: 100%;
                border-left: 1px solid $base-border-color;
            }
        }
    }
</style>
