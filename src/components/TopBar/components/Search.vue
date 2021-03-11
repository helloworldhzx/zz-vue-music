<template>
    <div>
        <div class="ad">zz</div>
        <div class="search-wrapper">
            <div class="search">
                <input id="search" type="text" />
                <label class="alabel" for="search">音乐/视频/电台/用户</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped lang="scss">
    .ad{
        float: right;
        width: 90px;
        height: 32px;
        margin: 19px 0 0 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border: 1px solid #4F4F4F;
        color: #ccc;
        border-radius: 20px;
    }
    .search-wrapper{
        float: right;
        width: 158px;
        height: 32px;
        margin-top: 19px;
        border-radius: 32px;
        background: url(../../../image/topbar.png) no-repeat 0 -99px $base-white;
        .search{
            display: block;
            position: relative;
            margin: 6px 0 0 30px;
            input{
                opacity: 1;
                width: 95%;
                margin: 0;
                padding: 0;
                background: transparent;
                color: #333;
                line-height: 16px;
                border: 0;
            }
            input:focus{
                outline: none;
            }
            label{
                display: block;
                position: absolute;
                top: 4px;
                left: 0;
                width: 90%;
                color: #9b9b9b;
                cursor: text;
                font-size: 12px;
            }
            input:focus~.alabel{
                display: none;
            }
        }
    }
</style>
