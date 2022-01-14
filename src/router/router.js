import Vue from "vue";
import VueRouter from "vue-router";
import FavoritePage from "@/views/FavoritePage";
import MainPage from "@/views/MainPage";
import WatchPage from "@/views/WatchPage";

Vue.use(VueRouter);

const router = new VueRouter({
    //To get rid of the hash, we can use the router's history mode
    mode: "history",
    //Define routes. Each route should map to a component
    routes: [
        {path: "/", component: MainPage},
        {name: 'watch', path: "/watch", component: WatchPage},
        {path: "/favorites/:userid", component: FavoritePage}
    ]
});

export default router;
