<template>
    <div class="zz-music">
        <TopBar />
        <Nav />
        <router-view />
    </div>
</template>

<script>
    import Nav from "@/components/Nav";
    import TopBar from "@/components/TopBar";
    export default {
        name: "Layout",
        components: {
            Nav,
            TopBar
        }
    }
</script>

<style scoped lang="scss">
</style>
