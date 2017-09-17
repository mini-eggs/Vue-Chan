// @flow

import "./header.css";

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

const template = `
  <header>
    <md-whiteframe md-elevation="5">
      <div class="z-index-1 relative">
        <md-toolbar>

          <!--BRAND-->
          <router-link 
            tag="h2" 
            to="/" 
            style="flex: 1;"
            class="md-title">
            Chan
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

          <router-link tag="span" to="/settings">
            <md-button class="md-icon-button">
              <md-icon>person</md-icon>
            </md-button>
          </router-link>

        </md-toolbar>
      </div>
    </md-whiteframe>
  </header>
`;

export { name, template, methods };
