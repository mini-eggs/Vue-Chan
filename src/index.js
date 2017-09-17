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

const router = new VueRouter({ routes: Routes });

router.afterEach(() => window.scrollTo(0, 0));

// mixins
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

// apply theme from local storage
function mounted() {
  Store.subscribe(data => {
    const theme = Store.getState().Settings.theme;
    const themeName = `custom-theme-${new Date().getTime()}`;
    this.$material.registerTheme(themeName, theme);
    this.$material.setCurrentTheme(themeName);
  });
}

new Vue({ el: "#root", router, mounted, render: h => h(App) });

registerServiceWorker();
