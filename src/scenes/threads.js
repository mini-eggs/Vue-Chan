import "./threads.css";
import ThreadSet from "../components/threadSet";

const name = "x-threads";

const components = {
  "x-thread-set": ThreadSet
};

const watch = {
  $route: function(value) {
    const location = value.params.board;
    this.location = location;
    this.requestThreads(location, 1);
  }
};

function data() {
  return {
    location: this.$route.params.board
  };
}

function mounted() {
  this.requestThreads(this.location, 1);
  this.$bus.$on("refresh", this.refresh);
}

function beforeDestroy() {
  this.$bus.$off("refresh", this.refresh);
}

function destroyed() {
  this.clearThreads(this.location);
}

const methods = {
  refresh() {
    this.refreshThreads(this.location);
  }
};

const template = `
  <div id="threads">
    <div v-for="(item, index) in boards[location]" :key="index">
      <x-thread-set :view="true" :items="item" ></x-thread-set>
    </div>
  </div>
`;

export default {
  name,
  watch,
  components,
  data,
  mounted,
  beforeDestroy,
  destroyed,
  methods,
  template
};
