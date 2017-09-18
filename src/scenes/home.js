// @flow

import HomeBoard from "../components/homeBoard";
import Search from "../containers/search";
import Loader from "../components/loader";

const name = "x-home";

const components = {
  "x-home-board": HomeBoard,
  "x-search": Search,
  "x-loader": Loader
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

    <!--LOADER-->
    <x-loader v-if="boards.length === 0 && !searchInput" ></x-loader>
    
    <!--SEARCH-->
    <div v-if="boards.length !== 0 || searchInput"  class="search-container">
      <x-search></x-search>
    </div>

    <!--ITEMS-->
    <div class="home-board-container">
      <v-list>
        <x-home-board 
          v-for="(item, index) in boards" :key="index"
          :board="item"
        ></x-home-board>
      </v-list>
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
