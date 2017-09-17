import "./threads.css";
import ThreadSet from "../components/threadSet";
import Loader from "../components/loader";

const name = "x-threads";

const components = {
  "x-thread-set": ThreadSet,
  "x-loader": Loader
};

const watch = {
  $route: function(value) {
    const location = value.params.board;
    const page = 1;
    this.location = location;
    this.page = page;
    this.requestThreads(location, page);
  }
};

function data() {
  return {
    location: this.$route.params.board,
    page: 1
  };
}

function mounted() {
  this.requestThreads(this.location, this.page);
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
  },
  move(position) {
    const nextPage = this.page + parseInt(position);
    this.page = nextPage;
    this.clearThreads(this.location);
    this.requestThreads(this.location, nextPage);
    window.scrollTo(0, 0);
  }
};

const template = `
  <div id="threads">
  
    <!--LOADER-->
    <x-loader v-if="( boards[location] || [] ).length === 0" ></x-loader>

    <!--LIST-->
    <div v-for="(item, index) in boards[location]" :key="index">
      <x-thread-set :view="true" :items="item" ></x-thread-set>
    </div>

    <!--PAGINATION-->
    <md-card v-if="( boards[location] || [] ).length !== 0" >
      <md-card-content>
        <div id="pagination">

          <!--BACK-->
          <span :class="{ 'hidden': page < 2 }" class="back pointer" @click="move(-1)">
            <md-icon>
              arrow_back
            </md-icon>
          </span>

          <!--CURRENT PAEG-->
          <span class="md-body-2">{{ page }}</span>

          <!--NEXT-->
          <span :class="{ 'hidden': page > 9 }" class="next pointer" @click="move(1)">
            <md-icon>
              arrow_forward
            </md-icon>
          </span>

        </div>
      </md-card-content>
    </md-card>

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
