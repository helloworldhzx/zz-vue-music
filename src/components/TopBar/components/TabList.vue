<template>
    <ul class="nav">
        <li v-for="tab in tabList" @click="handleLink(tab)">
            <a :class="{active: tab.path===active}">
                <em>{{tab.name}}</em>
                <sub v-if="tab.path===active"></sub>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "TabList",
        props: {
            tabList: {
                type: Array,
                default: function () {
                    return []
                }
            },
            active: {
                type: String,
                default: "discover"
            }
        },
        methods: {
            handleLink(tab){
                if(tab.target){
                    window.open(tab.path)
                } else {
                    this.$router.push(tab.path)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .nav{
        position: relative;
        margin: 0;
        li{
            float: left;
            cursor: pointer;
            position: relative;
            a{
                float: left;
                padding: 0 19px;
                text-decoration: none;
                color: #ccc;
                line-height: 70px;
                text-align: center;
                font-size: 14px;
            }
            .active{
                background: #000;
                color: #ffffff;
            }
            em{
                height: 70px;
                float: left;
            }
            sub{
                display: block;
                position: absolute;
                left: 50%;
                top: 64px;
                width: 12px;
                height: 7px;
                margin-left: -6px;
                overflow: hidden;
                background: url(../../../image/topbar.png) no-repeat -226px 0;
            }
        }
    }
</style>
