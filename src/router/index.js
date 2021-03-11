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
        name: "discover",
        meta: { active:"discover" },
        component: () => import("../views/discover/index/index")
    },{
        path: "discover/topList",
        name: "topList",
        meta: { active:"discover" },
        component: () => import("../views/discover/topList/")
    },{
        path: "discover/playList",
        name: "playList",
        meta: { active:"discover" },
        component: () => import("../views/discover/playList/")
    },{
        path: "discover/djradio",
        name: "djradio",
        meta: { active:"discover" },
        component: () => import("../views/discover/djradio/")
    },{
        path: "discover/artist",
        name: "artist",
        meta: { active:"discover" },
        component: () => import("../views/discover/artist/")
    },{
        path: "discover/album",
        name: "album",
        meta: { active:"discover" },
        component: () => import("../views/discover/album/")
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
