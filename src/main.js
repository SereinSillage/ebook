import Vue from "vue";
import App from "./App.vue";
// import Vuex from "vuex";
import router from "./router";
import store from "./store";
import "./assets/styles/icon.css";

Vue.config.productionTip = false;
// Vue.use(Vuex);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");