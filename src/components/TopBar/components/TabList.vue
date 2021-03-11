<template>
    <ul class="nav">
        <li v-for="tab in tabList" @click="handleLink(tab.path)">
            <a :class="{active: tab.path===active}">
                <em>{{tab.name}}</em>
                <sub></sub>
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
                default: []
            },
            active: {
                type: String,
                default: "discover"
            }
        },
        methods: {
            handleLink(path){
                this.$router.push(path)
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
        }
    }
</style>
