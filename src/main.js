import Vue from 'vue';
import App from './App.vue';
import router from "@/router/router";
import store from "@/store/store";

Vue.config.productionTip = false

//Created and mounted the root instance
//Created Vue instance to access Vue components with this.$store
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
