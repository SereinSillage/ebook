import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/ebook/index.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", redirect: "/ebook" },
    {
        path: "/ebook",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/ebook/index.vue"),
        children: [{
            path: ":fileName",
            component: () =>
                import ("../components/ebook/EbookReader.vue"),
        }, ],
    },
    // {
    //     path: "/about",

    //     name: "about",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
    // },
];

const router = new VueRouter({
    routes,
});

export default router;