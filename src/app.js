// @flow

import Vue from "vue/dist/vue.esm";
import VueRouter from "vue-router/dist/vue-router.esm";

import RegisterMixin from "./mixin";
import Routes from "./routes";
import Store from "./store";
import Header from "./components/header";
import Scroll from "./components/scroll";

const Vuetify = require("vuetify").default;
const { VueRedux } = require("vue2-redux");

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueRedux(Store));
Vue.use(RegisterMixin);

const router = new VueRouter({ routes: Routes });
router.afterEach(() => window.scrollTo(0, 0));

const app = {
  name: "x-app",

  components: {
    "x-header": Header,
    "x-scroll": Scroll
  },

  template: `
    <div id="x-app">
      <v-app>
        <x-header></x-header>
        <x-scroll>
          <router-view></router-view>
        </x-scroll>
      </v-app>
    </div>
  `
};

export { app, router };
