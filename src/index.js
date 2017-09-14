import Vue from "vue/dist/vue";
import VueMaterial from "vue-material";
import VueRouter from "vue-router";
import "vue-material/dist/vue-material.css";
import { VueRedux } from "vue2-redux";
import registerServiceWorker from "./registerServiceWorker";
import * as App from "./app";
import Routes from "./routes";
import Store from "./store";
import "./styles/main.css";

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(VueRedux(Store));

const router = new VueRouter({ mode: "hash", routes: Routes });

new Vue({ el: "#root", router, render: h => h(App) });

registerServiceWorker();
