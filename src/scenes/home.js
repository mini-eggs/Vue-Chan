// @flow

import "./home.css";
import HomeBoard from "../components/homeBoard";
import Search from "../containers/search";

const name = "x-home";

const components = {
  "x-home-board": HomeBoard,
  "x-search": Search
};

function mounted() {
  this.requestBoards();
  this.$bus.$on("refresh", this.refresh);
}

function beforeDestroy() {
  this.$bus.$off("refresh", this.refresh);
}

function destroyed() {
  this.clearSearchInput();
}

const methods = {
  refresh() {
    this.refreshBoards();
  }
};

const template = `
  <section id="home">
    <div class="search-container">
      <x-search></x-search>
    </div>
    <div class="home-board-container" v-for="(item, index) in boards" :key="index">
      <x-home-board :board="item"></x-home-board>
    </div>
  </section>
`;

export default {
  name,
  components,
  mounted,
  beforeDestroy,
  destroyed,
  methods,
  template
};
