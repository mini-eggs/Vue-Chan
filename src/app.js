import * as Header from "./components/header";
import * as Scroll from "./components/scroll";

const name = "x-app";

const components = {
  "x-header": Header,
  "x-scroll": Scroll
};

const template = `
  <div id="x-app">
    <x-header></x-header>
    <x-scroll>
      <router-view></router-view>
    </x-scroll>
  </div>
`;

export { name, components, template };
