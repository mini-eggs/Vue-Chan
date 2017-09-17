import "./posts.css";
import ThreadSet from "../components/threadSet";
import Loader from "../components/loader";

// pure

const getDataFromRoute = ({ params: { board, thread } }) => ({
  board,
  thread
});

// component

const name = "x-posts";

const components = {
  "x-thread-set": ThreadSet,
  "x-loader": Loader
};

const watch = {
  $route(value) {
    Object.assign(this.$data, getDataFromRoute(value));
  }
};

function data() {
  return getDataFromRoute(this.$route);
}

function mounted() {
  this.requestPosts(this.board, this.thread);
  this.$bus.$on("refresh", this.refresh);
}

function beforeDestroy() {
  this.$bus.$off("refresh", this.refresh);
}

function destroyed() {
  this.clearPosts(this.board, this.thread);
}

const methods = {
  refresh() {
    this.refreshPosts(this.board, this.thread);
  }
};

const template = `
  <div id="posts">

    <!--LOADER-->
    <x-loader v-if="( threads[thread] || [] ).length === 0" ></x-loader>

    <!--LIST-->
    <div v-for="(item, index) in threads[thread]" :key="index">
      <x-thread-set :view="false" :items="item" ></x-thread-set>
    </div>

  </div>
`;

export default {
  name,
  components,
  watch,
  data,
  mounted,
  beforeDestroy,
  destroyed,
  methods,
  template
};
