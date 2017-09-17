// @flow

// $ignore
import Vue from "vue/dist/vue";
import VueMaterial from "vue-material";
// $ignore
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

router.beforeEach((_to, _from, next) => {
  window.scrollTo(0, 0);
  next();
});

Vue.use(VueInstance => {
  const bus = new VueInstance();
  VueInstance.mixin({
    computed: {
      $bus() {
        return bus;
      }
    }
  });
});

new Vue({ el: "#root", router, render: h => h(App) });

registerServiceWorker();
