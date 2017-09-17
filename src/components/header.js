// @flow

import "./header.css";
import HeaderEvent from "../objects/headerEvent";

// constants

const headerEvent = new HeaderEvent({
  container: "header",
  inner: "#hamburger-container",
  offset: 200
});

const scrollHandler = () => headerEvent.scrollHandler();

// component specific

const name = "x-header";

const methods = {
  handleSearch() {
    if (this.$route.path === "/") {
      this.$bus.$emit("search");
    } else {
      this.$router.push({ path: "/" }, () => {
        this.$nextTick(() => {
          this.$bus.$emit("search");
        });
      });
    }
  }
};

function mounted() {
  window.addEventListener("scroll", scrollHandler);
}

function destroyed() {
  window.removeEventListener("scroll", scrollHandler);
}

const template = `
  <header>
    <div id="hamburger-container" class="z-index-1 relative">
      <md-toolbar>

        <!--BRAND-->
        <router-link 
          tag="h2" 
          to="/" 
          style="flex: 1;"
          class="md-title">
          Vue Chan
        </router-link>
        
        <!--ACTIONS-->
        <router-link tag="span" to="/">
          <md-button class="md-icon-button">
            <md-icon>home</md-icon>
          </md-button>
        </router-link>

        <md-button @click="$router.back()" class="md-icon-button">
          <md-icon>arrow_back</md-icon>
        </md-button>

        <md-button @click="$bus.$emit('refresh')" class="md-icon-button">
          <md-icon>refresh</md-icon>
        </md-button>

        <md-button @click="handleSearch" class="md-icon-button">
          <md-icon>search</md-icon>
        </md-button>

      </md-toolbar>
    </div>
  </header>
`;

export { name, template, methods, mounted, destroyed };
