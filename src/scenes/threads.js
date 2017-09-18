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
    this.page = 1;
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
    <v-card v-if="( boards[location] || [] ).length !== 0" >
      <div id="pagination">

        <v-card-actions>
          <v-btn :class="{ 'hidden': page < 2 }" icon @click="move(-1)">
            <v-icon>arrow_back</v-icon>
          </v-btn>

          <v-spacer>
            <p class="text-center">{{ page }}</p>
          </v-spacer>

          <v-btn :class="{ 'hidden': page > 9 }" icon @click="move(1)">
            <v-icon>arrow_forward</v-icon>
          </v-btn>
        </v-card-actions>

      </div>
    </v-card>
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
