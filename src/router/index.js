import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout"
Vue.use(VueRouter);

export const routers = [{
    path: "/",
    component: Layout,
    redirect: 'discover',
    children: [{
        path: "discover",
        name: "Discover",
        meta: { active:"discover" },
        component: () => import("../views/discover/index/index")
    },{
        path: "discover/topList",
        name: "TopList",
        meta: { active:"discover" },
        component: () => import("../views/discover/topList/")
    },{
        path: "playList",
        name: "PlayList",
        meta: { active:"discover" },
        component: () => import("../views/discover/topList/")
    }]
},{
    path: "/myMusic",
    meta: { active:"myMusic" },
    component: Layout,
    children: []
}];

const router = new VueRouter({
    base: "",
    mode: "hash",
    scrollBehavior: () => ({
        y: 0,
    }),
    routes: routers,
})

export default router
